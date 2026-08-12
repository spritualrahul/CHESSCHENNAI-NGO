#!/usr/bin/env node

/**
 * Image Optimization Script for CHES Chennai NGO
 * Uses sharp (bundled with Next.js) to compress and resize images.
 *
 * Usage:  node scripts/optimize-images.mjs
 *
 * What it does:
 * 1. Compresses gallery photos (max 1600px wide, JPEG quality 78)
 * 2. Compresses "new images" (max 1600px wide, JPEG quality 78)
 * 3. Compresses banner/carousel images (max 1920px wide)
 * 4. Compresses donor logos (max 400px wide, quality 80)
 * 5. Removes unused .HEIC duplicates
 * 6. Reports savings
 */

import { readdir, stat, unlink, rename } from "node:fs/promises";
import { join, extname, basename } from "node:path";
import sharp from "sharp";

const ROOT = new URL("../public/Assets", import.meta.url).pathname;

const TARGETS = [
  {
    dir: join(ROOT, "Galary"),
    maxWidth: 1600,
    quality: 78,
    extensions: [".jpg", ".jpeg", ".png"],
  },
  {
    dir: join(ROOT, "new images"),
    maxWidth: 1600,
    quality: 78,
    extensions: [".jpg", ".jpeg", ".png"],
  },
  {
    dir: join(ROOT, "Banner-carousel"),
    maxWidth: 1920,
    quality: 80,
    extensions: [".jpg", ".jpeg", ".png"],
  },
  {
    dir: join(ROOT, "Donor logo"),
    maxWidth: 400,
    quality: 80,
    extensions: [".jpg", ".jpeg", ".png"],
  },
  {
    dir: join(ROOT, "About"),
    maxWidth: 800,
    quality: 80,
    extensions: [".jpg", ".jpeg", ".png"],
  },
  {
    dir: join(ROOT, "payment-logos"),
    maxWidth: 200,
    quality: 85,
    extensions: [".png"],
  },
];

const HEIC_DIR = join(ROOT, "Galary");

let totalBefore = 0;
let totalAfter = 0;
let filesProcessed = 0;
let filesSkipped = 0;
let heicDeleted = 0;

async function optimizeImage(filePath, maxWidth, quality) {
  const ext = extname(filePath).toLowerCase();
  const before = (await stat(filePath)).size;

  // Skip very small files (< 50KB) — already optimized
  if (before < 50_000 && ext !== ".png") {
    filesSkipped++;
    return;
  }

  // For PNG logos under 100KB, skip
  if (before < 100_000 && ext === ".png") {
    filesSkipped++;
    return;
  }

  totalBefore += before;

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    let pipeline = image;

    // Only resize if wider than maxWidth
    if (metadata.width && metadata.width > maxWidth) {
      pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
    }

    // Output based on format — keep original format for compatibility
    let outputBuffer;
    if (ext === ".png") {
      outputBuffer = await pipeline
        .png({ quality: quality, compressionLevel: 9 })
        .toBuffer();
    } else {
      outputBuffer = await pipeline
        .jpeg({ quality: quality, mozjpeg: true })
        .toBuffer();
    }

    const after = outputBuffer.length;

    // Only overwrite if we actually saved space (> 5%)
    if (after < before * 0.95) {
      // Write optimized buffer back to original path
      await sharp(outputBuffer).toFile(filePath + ".tmp");
      await rename(filePath + ".tmp", filePath);
      totalAfter += after;
      filesProcessed++;
      const saved = ((1 - after / before) * 100).toFixed(1);
      console.log(
        `  ✓ ${basename(filePath)}: ${fmtSize(before)} → ${fmtSize(after)} (${saved}% saved)`
      );
    } else {
      totalAfter += before;
      filesSkipped++;
      console.log(`  ⊘ ${basename(filePath)}: ${fmtSize(before)} — already optimal`);
    }
  } catch (err) {
    totalAfter += before;
    console.error(`  ✗ ${basename(filePath)}: ${err.message}`);
  }
}

async function deleteHeicFiles() {
  console.log("\n🗑  Removing unused .HEIC files...");
  try {
    const entries = await readdir(HEIC_DIR);
    for (const entry of entries) {
      if (extname(entry).toLowerCase() === ".heic") {
        const fullPath = join(HEIC_DIR, entry);
        await unlink(fullPath);
        heicDeleted++;
        console.log(`  ✓ Deleted ${entry}`);
      }
    }
  } catch (err) {
    console.error(`  ✗ Error reading HEIC directory: ${err.message}`);
  }
}

function fmtSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

async function main() {
  console.log("🖼  CHES Image Optimization\n");

  for (const target of TARGETS) {
    console.log(`\n📁 ${target.dir.replace(ROOT, "Assets")}`);
    console.log(`   Max width: ${target.maxWidth}px, Quality: ${target.quality}`);

    let entries;
    try {
      entries = await readdir(target.dir);
    } catch {
      console.log("   (directory not found, skipping)");
      continue;
    }

    const imageFiles = entries.filter((f) => {
      const ext = extname(f).toLowerCase();
      return target.extensions.includes(ext);
    });

    console.log(`   Found ${imageFiles.length} images\n`);

    for (const file of imageFiles) {
      await optimizeImage(join(target.dir, file), target.maxWidth, target.quality);
    }
  }

  await deleteHeicFiles();

  console.log("\n" + "═".repeat(50));
  console.log("📊 Summary");
  console.log("═".repeat(50));
  console.log(`   Files optimized: ${filesProcessed}`);
  console.log(`   Files skipped:   ${filesSkipped}`);
  console.log(`   HEIC deleted:    ${heicDeleted}`);
  if (totalBefore > 0) {
    console.log(`   Before:          ${fmtSize(totalBefore)}`);
    console.log(`   After:           ${fmtSize(totalAfter)}`);
    console.log(
      `   Total saved:     ${fmtSize(totalBefore - totalAfter)} (${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%)`
    );
  }
  console.log("═".repeat(50));
}

main().catch(console.error);

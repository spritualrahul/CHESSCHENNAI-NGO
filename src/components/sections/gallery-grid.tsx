import Image from "next/image";

import { galleryItems } from "@/data/site";

export function GalleryGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {galleryItems.map((item) => (
        <article key={item.title} className="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-black/[0.04]">
          <div className="relative aspect-[4/3]">
            <Image src={item.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
          </div>
          <div className="p-5">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--ches-orange)]">{item.type}</p>
            <h2 className="mt-2 font-heading text-xl font-bold text-[var(--ches-blue)]">{item.title}</h2>
          </div>
        </article>
      ))}
    </div>
  );
}

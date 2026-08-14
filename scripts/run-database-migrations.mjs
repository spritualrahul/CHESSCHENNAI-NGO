import { existsSync, readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";

const root = resolve(import.meta.dirname, "..");
const migrationsDir = resolve(root, "database", "migrations");

function unquote(value) {
  const trimmed = value.trim();

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }

  return trimmed;
}

function loadEnvFile(fileName) {
  const envPath = resolve(root, fileName);

  if (!existsSync(envPath)) {
    return;
  }

  const lines = readFileSync(envPath, "utf8").split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const match = trimmed.match(/^(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);

    if (!match) {
      continue;
    }

    const [, key, rawValue] = match;

    process.env[key] ??= unquote(rawValue);
  }
}

function decodeUrlValue(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function getPostgresEnvironment(connectionString) {
  let url;

  try {
    url = new URL(connectionString);
  } catch {
    console.error("DATABASE_URL is not a valid PostgreSQL connection URL.");
    process.exit(1);
  }

  if (!["postgres:", "postgresql:"].includes(url.protocol)) {
    console.error("DATABASE_URL must start with postgres:// or postgresql://.");
    process.exit(1);
  }

  const databaseName = url.pathname.replace(/^\//, "");

  if (!url.hostname || !databaseName) {
    console.error("DATABASE_URL must include a host and database name.");
    process.exit(1);
  }

  const env = {
    PGHOST: url.hostname,
    PGDATABASE: decodeUrlValue(databaseName),
    PGUSER: decodeUrlValue(url.username),
    PGPASSWORD: decodeUrlValue(url.password),
  };

  if (url.port) {
    env.PGPORT = url.port;
  }

  const sslMode = url.searchParams.get("sslmode");
  const channelBinding = url.searchParams.get("channel_binding");
  const applicationName = url.searchParams.get("application_name");

  if (sslMode) {
    env.PGSSLMODE = sslMode;
  }

  if (channelBinding) {
    env.PGCHANNELBINDING = channelBinding;
  }

  if (applicationName) {
    env.PGAPPNAME = applicationName;
  }

  return env;
}

loadEnvFile(".env.local");
loadEnvFile(".env");

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not set. Add it to .env.local or export it before running migrations.");
  process.exit(1);
}

const migrations = readdirSync(migrationsDir)
  .filter((fileName) => fileName.endsWith(".sql"))
  .sort();
const postgresEnv = getPostgresEnvironment(process.env.DATABASE_URL);

for (const migration of migrations) {
  const migrationPath = resolve(migrationsDir, migration);

  console.log(`\nApplying ${migration}`);

  const result = spawnSync("psql", ["-v", "ON_ERROR_STOP=1", "-f", migrationPath], {
    cwd: root,
    env: {
      ...process.env,
      ...postgresEnv,
    },
    stdio: "inherit",
  });

  if (result.error) {
    if (result.error.code === "ENOENT") {
      console.error("psql was not found. Install PostgreSQL client tools, then run npm run db:migrate again.");
    } else {
      console.error(result.error.message);
    }

    process.exit(1);
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

console.log("\nDatabase migrations completed.");

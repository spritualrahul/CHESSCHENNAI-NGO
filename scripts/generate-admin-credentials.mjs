import { hash } from "bcryptjs";
import { randomBytes } from "node:crypto";

const password = randomBytes(18).toString("base64url");
const authSecret = randomBytes(48).toString("base64url");
const passwordHash = await hash(password, 12);

console.log("Generated production credentials. Store them in your password manager and Vercel environment variables.\n");
console.log(`AUTH_SECRET=${authSecret}`);
console.log(`ADMIN_PASSWORD_HASH=${passwordHash}`);
console.log(`One-time admin password: ${password}`);

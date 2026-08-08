# Donation and admin setup

The donation flow stores donor details in Neon before revealing the existing CHES UPI QR. A saved donation starts with `PENDING` payment status because a static UPI QR cannot confirm payment completion.

## Environment variables

Configure these values locally in `.env.local` and in Vercel Project Settings → Environment Variables. Never commit real values.

```dotenv
DATABASE_URL=postgresql://...
AUTH_SECRET=at-least-32-random-characters
ADMIN_EMAIL=authorised-admin@example.org
ADMIN_PASSWORD_HASH=$2b$12$...
DONATION_REQUIRE_PAN=false
```

- `DATABASE_URL`: Neon PostgreSQL connection string. Use the Neon pooled connection string for Vercel runtime traffic.
- `AUTH_SECRET`: random signing secret of at least 32 characters.
- `ADMIN_EMAIL`: the only email accepted by `/admin/login`.
- `ADMIN_PASSWORD_HASH`: bcrypt hash; the plaintext password is never stored in the app.
- `DONATION_REQUIRE_PAN`: set to `true` only when CHES has a legitimate tax or operational need to require PAN. When omitted or `false`, PAN remains optional.

Generate a strong `AUTH_SECRET`, admin password and bcrypt hash with:

```bash
npm run admin:credentials
```

Save the displayed password in a password manager. Only `AUTH_SECRET` and `ADMIN_PASSWORD_HASH` go into the environment; add the authorised email separately as `ADMIN_EMAIL`.

## Database initialization

The schema is in `database/migrations/001_create_donations.sql`. With `DATABASE_URL` available in the current shell and PostgreSQL `psql` installed, run:

```bash
npm run db:migrate
```

The migration is idempotent and creates the `donations` table plus indexes for date, status and email. It can also be pasted into the Neon SQL Editor and executed once.

## Local development

```bash
npm install
npm run db:migrate
npm run dev
```

Open:

- Donor flow: `http://localhost:3000/donate`
- Admin login: `http://localhost:3000/admin/login`

Quality checks:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Vercel deployment

1. Create or select the Vercel project for this repository.
2. Add all required environment variables for Production (and Preview if previews should use a database).
3. Prefer the Neon pooled URL for `DATABASE_URL` in Vercel.
4. Apply the SQL migration to Neon once before sending donors to the new form.
5. Deploy using the default Next.js build command, `npm run build`.
6. Visit `/admin/login`, sign in, and verify that `/admin` lists a test donation.

Do not put database or admin secrets in variables prefixed with `NEXT_PUBLIC_`.

## Operational and security notes

- Public writes are validated on both client and server with Zod.
- A UUID idempotency key prevents network retries or double-clicks from creating duplicate records.
- Neon access is isolated to server-only modules.
- Admin sessions are signed, HTTP-only, same-site cookies and expire after eight hours.
- Admin pages are server-authorized and marked `noindex`/`nofollow`.
- PAN is absent from the donor list and shown in full only on an authenticated detail page.
- Personal donor data should not be logged, exported, or shared outside authorised receipt, reconciliation and compliance work.
- Changing `PENDING` to `PAID` should only happen after manual reconciliation or a future verified payment webhook. The current form never claims that payment succeeded.

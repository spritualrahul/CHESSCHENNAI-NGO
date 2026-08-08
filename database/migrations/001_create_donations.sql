BEGIN;

CREATE TABLE IF NOT EXISTS donations (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  donation_id VARCHAR(32) NOT NULL UNIQUE,
  idempotency_key UUID NOT NULL UNIQUE,
  name VARCHAR(120) NOT NULL,
  pan VARCHAR(10),
  email VARCHAR(254) NOT NULL,
  phone VARCHAR(10) NOT NULL,
  address TEXT NOT NULL,
  amount NUMERIC(12, 2) NOT NULL CHECK (amount > 0),
  payment_status VARCHAR(16) NOT NULL DEFAULT 'PENDING'
    CHECK (payment_status IN ('PENDING', 'PAID', 'FAILED')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS donations_created_at_idx
  ON donations (created_at DESC);

CREATE INDEX IF NOT EXISTS donations_payment_status_idx
  ON donations (payment_status);

CREATE INDEX IF NOT EXISTS donations_email_idx
  ON donations (LOWER(email));

CREATE OR REPLACE FUNCTION set_donations_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS donations_set_updated_at ON donations;
CREATE TRIGGER donations_set_updated_at
  BEFORE UPDATE ON donations
  FOR EACH ROW
  EXECUTE FUNCTION set_donations_updated_at();

COMMIT;

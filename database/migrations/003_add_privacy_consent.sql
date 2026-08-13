BEGIN;

ALTER TABLE donations
  ADD COLUMN IF NOT EXISTS privacy_notice_version VARCHAR(32),
  ADD COLUMN IF NOT EXISTS consent_at TIMESTAMPTZ;

CREATE INDEX IF NOT EXISTS donations_consent_at_idx
  ON donations (consent_at DESC);

COMMIT;

BEGIN;

CREATE TABLE IF NOT EXISTS page_visit_totals (
  page_path VARCHAR(128) PRIMARY KEY,
  total_count BIGINT NOT NULL DEFAULT 0 CHECK (total_count >= 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO page_visit_totals (page_path, total_count)
VALUES ('/', 0)
ON CONFLICT (page_path) DO NOTHING;

CREATE OR REPLACE FUNCTION set_page_visit_totals_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS page_visit_totals_set_updated_at ON page_visit_totals;
CREATE TRIGGER page_visit_totals_set_updated_at
  BEFORE UPDATE ON page_visit_totals
  FOR EACH ROW
  EXECUTE FUNCTION set_page_visit_totals_updated_at();

COMMIT;

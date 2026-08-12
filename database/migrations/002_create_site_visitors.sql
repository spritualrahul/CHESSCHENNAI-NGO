BEGIN;

CREATE TABLE IF NOT EXISTS site_visitors (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  visitor_id UUID NOT NULL,
  page_path VARCHAR(128) NOT NULL DEFAULT '/',
  visit_count INTEGER NOT NULL DEFAULT 1 CHECK (visit_count > 0),
  first_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT site_visitors_page_path_check CHECK (page_path = '/'),
  CONSTRAINT site_visitors_visitor_page_unique UNIQUE (visitor_id, page_path)
);

CREATE INDEX IF NOT EXISTS site_visitors_page_path_idx
  ON site_visitors (page_path);

CREATE INDEX IF NOT EXISTS site_visitors_last_seen_at_idx
  ON site_visitors (last_seen_at DESC);

CREATE OR REPLACE FUNCTION set_site_visitors_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS site_visitors_set_updated_at ON site_visitors;
CREATE TRIGGER site_visitors_set_updated_at
  BEFORE UPDATE ON site_visitors
  FOR EACH ROW
  EXECUTE FUNCTION set_site_visitors_updated_at();

COMMIT;

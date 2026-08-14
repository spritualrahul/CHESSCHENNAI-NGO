BEGIN;

CREATE TABLE IF NOT EXISTS page_unique_visitors (
  visitor_id UUID NOT NULL,
  page_path VARCHAR(128) NOT NULL,
  first_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT page_unique_visitors_page_path_check CHECK (page_path = '/'),
  CONSTRAINT page_unique_visitors_visitor_page_unique PRIMARY KEY (visitor_id, page_path)
);

CREATE INDEX IF NOT EXISTS page_unique_visitors_page_path_idx
  ON page_unique_visitors (page_path);

CREATE INDEX IF NOT EXISTS page_unique_visitors_last_seen_at_idx
  ON page_unique_visitors (last_seen_at DESC);

COMMIT;

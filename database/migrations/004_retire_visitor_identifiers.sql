BEGIN;

-- The public visitor counter was removed. Its persistent visitor identifiers
-- are no longer needed for a stated website purpose.
DROP TABLE IF EXISTS site_visitors;

COMMIT;

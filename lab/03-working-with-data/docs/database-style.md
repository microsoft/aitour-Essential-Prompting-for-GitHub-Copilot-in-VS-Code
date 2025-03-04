## Database

 - All SQL files (.sql), database files (.db, .sqlite) will live in the `/db` directory.
 - SQLite will be used for development and stored at `/db/dev.db`
 - SQLite in-memory will be used for testing and build.
 - PostgreSQL will be used for production.
 - All ORM models will live in the `/db/models` directory.
 - Database tables will be lower cased using underscores.
 - Every table will have an auto increment integer primary key called `id`.
 - `users` will not store passwords, only social login information as well as magic email links.
 - `char`, `varchar` and `nvarchar` are never to be used for string fields, only `text`.
 - Every table should have `created_at` and `updated_at` timestamps.
 - Many to Many relationships will have compound primary keys, never a single ID with compound unique.
 - All connection strings will be stored in a local `.env` file

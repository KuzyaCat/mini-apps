1. `cargo install cargo-watch`, `cargo watch -x check`, `cargo watch -x check -x test -x run` - Watch
2. `cargo install cargo-tarpaulin`, `cargo tarpaulin --ignore-tests` - Code coverage
3. `rustup component add clippy`, `cargo clippy`, `cargo clippy -- -D warnings` - Linting
4. `rustup component add rustfmt`, `cargo fmt`, `cargo fmt -- --check` - Formatting
5. `cargo install cargo-audit`, `cargo audit` - Security Vulnerabilities
6. `cargo install cargo-expand`, `rustup toolchain install nightly --allow-downgrade`, `cargo +nightly expand` - Macro expansion

Launch Postgres:
Make it executable: `chmod +x scripts/init_db.sh`
Run: `./scripts/init_db.sh`

Skip Docker: `SKIP_DOCKER=true ./scripts/init_db.sh`

Create a migration:
`
export DATABASE_URL=postgres://postgres:password@127.0.0.1:5432/newsletter
sqlx migrate add create_subscriptions_table
`
Run a migration:
`sqlx migrate run`

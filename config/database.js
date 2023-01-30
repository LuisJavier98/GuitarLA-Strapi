module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf4ncoun6mpmrnspjgrg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_t0s3'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '9JA761hDjzeoomABNvbcBf2EmYWDIfTm'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});

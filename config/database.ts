module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    client: 'postgres',
    connector: 'bookshelf',
    settings: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'event_manager'),
      username: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', ''),
      ssl: env.bool('DATABASE_SSL', false),
    },
    options: {}
  },
});
export const configuration = () => ({
  mode: process.env.mode,

  serve: {
    port: parseInt(process.env.serve_port),
  },

  db: {
    mysql: {
      host: process.env.db_mysql_host,
      port: parseInt(process.env.db_mysql_port),
      username: process.env.db_mysql_username,
      password: process.env.db_mysql_password,
      database: process.env.db_mysql_database,
    },

    mongoose: {
      uri: process.env.db_mongoose_uri,
    },

    redis: {
      url: process.env.db_redis_url,
    },
  },
});

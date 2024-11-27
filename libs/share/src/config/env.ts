import { ConfigModuleOptions } from '@nestjs/config';

export const configuration = () => ({
  mode: process.env.mode,
  isProdMode: process.env.mode === 'prod',

  serveProd: {
    oauth: parseInt(process.env.serve_port_oauth),
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

  jwt: {
    secret: process.env.jwt_secret,
  },
});

export const configModuleOptions: ConfigModuleOptions = {
  cache: true,
  isGlobal: true,
  envFilePath: `.env.${process.env.NODE_ENV}`,
  load: [configuration],
};

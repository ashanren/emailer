
module.exports = {
  development : {
    client  : 'mysql',
    connection: {
      host      : '127.0.0.1',
      port      : 3306,
      user      : 'app-user',
      password  : 'JcGWz584',
      database  : 'test-cron-db',
      dateStrings: true,
    },
    pool: {
      min: 2,
      max: 10
    },
    debug: false,
  },
  production  : {
    client  : 'mysql',
    connection: {
      host      : '127.0.0.1',
      port      : 3306,
      user      : 'app-user',
      password  : 'JcGWz584',
      database  : 'cron-db',
      dateStrings: true,
    },
    pool: {
      min: 2,
      max: 10
    },
  }
};


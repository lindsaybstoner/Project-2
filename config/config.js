module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "dogapp_db",
    host: "127.0.0.1",
    port: 3306,
<<<<<<< HEAD
=======

>>>>>>> 4cee43a3ad5c5eca5690d1c1cdcae385a38c44ce
    dialect: "mysql"
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "dogapp_db",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql"
  },
  production: {
    // eslint-disable-next-line camelcase
<<<<<<< HEAD
    // eslint-disable-next-line camelcase
    use_env_variable: "JAWSDB_URL",
=======
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "dogapp_db",
    host: "127.0.0.1",
    port: 3306,
>>>>>>> 4cee43a3ad5c5eca5690d1c1cdcae385a38c44ce
    dialect: "mysql"
  }
};

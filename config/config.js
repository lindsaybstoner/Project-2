module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "dogapp_db",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "vrw0ndn37554r84u",
    host: "gp96xszpzlqupw4k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql"
  },
  production: {
    // eslint-disable-next-line camelcase
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "vrw0ndn37554r84u",
    host: "gp96xszpzlqupw4k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql"
  }
};

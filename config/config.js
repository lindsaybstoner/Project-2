module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "migpmro3qtsccma6",
    host: "tviw6wn55xwxejwj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql"
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "migpmro3qtsccma6",
    host: "tviw6wn55xwxejwj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql"
  },
  production: {
    // eslint-disable-next-line camelcase
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "migpmro3qtsccma6",
    host: "tviw6wn55xwxejwj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql"
  }
};

module.exports = {
  HOST: "myapp-mysqldb-use1.cysjtc0l6kjf.us-east-1.rds.amazonaws.com",
  USER: "username",
  PASSWORD: "?*U}{rVjW7LlL*-e3XbY8hAYke4*",
  DB: "myappmysql",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = {
  HOST: process.env.HOST,
  USER: process.env.USER,
  PASSWORD: "#JE}ZNY27+u4da*nrazhmP3?k5Pm",//process.env.PASSWORD,
  DB: process.env.DBNAME,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

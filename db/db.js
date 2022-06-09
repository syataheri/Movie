const Sequelize = require("sequelize");
// this require is for testing use cases
require("dotenv").config();

let dbName;
if (process.env.NODE_ENV === "production") {
  dbName = process.env.DB;
} else {
  dbName = process.env.TESTDB;
}

const sequelize = new Sequelize(dbName, process.env.user, process.env.password, {
  host: process.env.HOST,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


module.exports = sequelize;

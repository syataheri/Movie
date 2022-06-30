import Sequelize from "sequelize";
// this require is for testing use cases
import dotenv from "dotenv";
dotenv.config();

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


export { sequelize };

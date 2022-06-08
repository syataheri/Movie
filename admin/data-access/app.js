const Admin = require("../models/admin");
const adminDataBase = require("./adminDB");

const adminDB = adminDataBase(Admin);

module.exports = { adminDB };
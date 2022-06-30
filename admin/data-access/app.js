const Admin = require("../models/admin");
const adminDataBase = require("./adminDB");
const { ServerError } = require("../../exceptions");

const adminDB = adminDataBase({ Admin, ServerError });

module.exports = { adminDB };
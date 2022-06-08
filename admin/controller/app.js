const { createAdmin, updateAdmin, removeAdmin,login, retreveAdmins } = require("../use-cases/app");
const makeAdmin = require("./postAdmin");
const makeRemoveAdmin = require("./postRremoveAdmin");
const makeUpdateAdmin = require("./postUpdateAdmin");
const makeLogin = require("./postlogin");
const makeGetAdmins = require("./getAdmins");

const postAdmin = makeAdmin(createAdmin);
const postUpdateAdmin = makeUpdateAdmin(updateAdmin);
const postRremoveAdmin = makeRemoveAdmin(removeAdmin);
const postLogin = makeLogin(login);
const getAdmins = makeGetAdmins(retreveAdmins);

module.exports = { postAdmin,postUpdateAdmin, postRremoveAdmin, postLogin, getAdmins };
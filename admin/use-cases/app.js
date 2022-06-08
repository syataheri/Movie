const jwt = require("../utils/jwt");
const { verify } = require("../utils/bcrypt");

const makeCreateAdmin = require("../entity/app");
const makebuildAdmin = require("./createAdmin");
const makeUpdateAdmin = require("./updateAdmin");
const makeRemoveAdmin = require("./removeAdmin");
const makeLoginAdmin = require("./adminLogin");
const makeGetAdmins = require("./retreveAdmins");
const { adminDB } = require("../data-access/app");
const { EmailDuplicateError, AdminNotFoundError, EmailOrPasswordWrongError } = require("../../exceptions");

const createAdmin = makebuildAdmin({ makeCreateAdmin, adminDB, EmailDuplicateError });
const updateAdmin = makeUpdateAdmin({ makeCreateAdmin, adminDB, AdminNotFoundError });
const removeAdmin = makeRemoveAdmin({ adminDB, AdminNotFoundError });
const login = makeLoginAdmin({ adminDB, jwt, verify, EmailOrPasswordWrongError });
const retreveAdmins = makeGetAdmins({ adminDB, AdminNotFoundError });

module.exports = { createAdmin, updateAdmin, removeAdmin, login, retreveAdmins };
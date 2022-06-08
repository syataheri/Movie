const buildMakeAdmin = require("./admin");
const {NotValidError} = require("../../exceptions");
const isValid = require("../utils/validation.js");
const {encrypt} = require("../utils/bcrypt");

const createAdmin = buildMakeAdmin({isValid , NotValidError , encrypt});

const makeCreateAdmin = (data)=> {
    return createAdmin(data);
}
module.exports = makeCreateAdmin;
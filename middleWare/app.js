const jwt = require("jsonwebtoken");

const { NotAuthorizedError } = require("../exceptions");
const makeIsAuth = require("./auth");

const isAuth = makeIsAuth({ jwt, NotAuthorizedError });

module.exports = { isAuth };
const isValid = require("../utils/validation");
const { NotValidError } = require("../../exceptions");
const makeBuildMovie = require("./movie");

const makeMovie = makeBuildMovie({ isValid, NotValidError });

module.exports = makeMovie;
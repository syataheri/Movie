const Movie = require("../model/movie");
const makeMovieDB = require("./movieDB");
const { ServerError } = require("../../exceptions");
const Op = require("sequelize").Op;

const movieDB = makeMovieDB({ Movie, ServerError, Op });

module.exports = { movieDB };
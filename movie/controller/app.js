const { addMovie, updateMovie, selectMovies, selectMovie, removeMovie } = require("../use-cases/app");
const makePostAddMovie = require("./postAddMovie");
const makePostUpdateMovie = require("./postUpdateMovie");
const makeGetMovies = require("./getMovies");
const makeGetMovie = require("./getMovie");
const makePostRemoveMovie = require("./postRemoveMovie");

const postAddMovie = makePostAddMovie(addMovie);
const postUpdateMovie = makePostUpdateMovie(updateMovie);
const getMovies = makeGetMovies(selectMovies);
const getMovie = makeGetMovie(selectMovie);
const postRemoveMovie = makePostRemoveMovie(removeMovie);

module.exports = { postAddMovie, postUpdateMovie, getMovies, postRemoveMovie, getMovie };
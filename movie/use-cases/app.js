const { movieDB } = require("../data-access/app");
const makeMovie = require("../entity/app");
const makeAddMovie = require("./addMovie");
const makeUpdateMovie = require("./updateMovie");
const makeSelectMovies = require("./selectMovies");
const makeSelectMovie = require("./selectMovie");
const makeRemoveMovie = require("./removeMovie");
const { MovieDuplicateError, MovieNotFoundError, ForbiddenError } = require("../../exceptions");

const addMovie = makeAddMovie({ makeMovie, movieDB, MovieDuplicateError });
const updateMovie = makeUpdateMovie({ makeMovie, movieDB, MovieNotFoundError, ForbiddenError });
const selectMovies = makeSelectMovies({ movieDB, MovieNotFoundError });
const selectMovie = makeSelectMovie({ movieDB, MovieNotFoundError });
const removeMovie = makeRemoveMovie({ movieDB, MovieNotFoundError, ForbiddenError });
module.exports = { addMovie, updateMovie, selectMovies, removeMovie, selectMovie };
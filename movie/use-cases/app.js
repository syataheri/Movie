import { movieDB } from "../data-access/app.js";
import { makeMovie } from "../entity/app.js";
import { makeAddMovie } from "./addMovie.js";
import { makeUpdateMovie } from "./updateMovie.js";
import { makeSelectMovies } from "./selectMovies.js";
import { makeSelectMovie } from "./selectMovie.js";
import { makeRemoveMovie } from "./removeMovie.js";
import { MovieDuplicateError, MovieNotFoundError, ForbiddenError } from "../../exceptions.js";

const addMovie = makeAddMovie({ makeMovie, movieDB, MovieDuplicateError });
const updateMovie = makeUpdateMovie({ makeMovie, movieDB, MovieNotFoundError, ForbiddenError });
const selectMovies = makeSelectMovies({ movieDB, MovieNotFoundError });
const selectMovie = makeSelectMovie({ movieDB, MovieNotFoundError });
const removeMovie = makeRemoveMovie({ movieDB, MovieNotFoundError, ForbiddenError });

export { addMovie, updateMovie, selectMovies, removeMovie, selectMovie };
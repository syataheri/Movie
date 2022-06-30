import { addMovie, updateMovie, selectMovies, selectMovie, removeMovie } from "../use-cases/app.js";
import { makePostAddMovie } from "./postAddMovie.js";
import { makePostUpdateMovie } from "./postUpdateMovie.js";
import { makeGetMovies } from "./getMovies.js";
import { makeGetMovie } from "./getMovie.js";
import { makePostRemoveMovie } from "./postRemoveMovie.js";

const postAddMovie = makePostAddMovie(addMovie);
const postUpdateMovie = makePostUpdateMovie(updateMovie);
const getMovies = makeGetMovies(selectMovies);
const getMovie = makeGetMovie(selectMovie);
const postRemoveMovie = makePostRemoveMovie(removeMovie);

export { postAddMovie, postUpdateMovie, getMovies, postRemoveMovie, getMovie };
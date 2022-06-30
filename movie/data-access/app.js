import { Movie } from "../model/movie.js";
import { makeMovieDB } from "./movieDB.js";
import { ServerError } from "../../exceptions.js";
import sequelize from "sequelize";
const Op = sequelize.Op;

const movieDB = makeMovieDB({ Movie, ServerError, Op });

export { movieDB };
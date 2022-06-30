import { isValid } from "../utils/validation.js";
import { NotValidError } from "../../exceptions.js";
import { makeBuildMovie } from "./movie.js";

const makeMovie = makeBuildMovie({ isValid, NotValidError });

export { makeMovie };
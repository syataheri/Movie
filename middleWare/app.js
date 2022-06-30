import jwt from "jsonwebtoken";

import { NotAuthorizedError } from "../exceptions.js";
import { makeIsAuth } from "./auth.js";

const isAuth = makeIsAuth({ jwt, NotAuthorizedError });

export { isAuth };
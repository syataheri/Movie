import { buildMakeAdmin } from "./admin.js";
import { NotValidError } from "../../exceptions.js";
import { isValid } from "../utils/validation.js";
import { encrypt } from "../utils/bcrypt.js";

const createAdmin = buildMakeAdmin({ isValid, NotValidError, encrypt });

const makeCreateAdmin = (data) => {
    return createAdmin(data);
}
export { makeCreateAdmin };
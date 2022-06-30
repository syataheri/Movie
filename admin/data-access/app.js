import { Admin } from "../models/admin.js";
import { adminDataBase } from "./adminDB.js";
import { ServerError } from "../../exceptions.js";

const adminDB = adminDataBase({ Admin, ServerError });

export { adminDB };
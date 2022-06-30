import { createAdmin, updateAdmin, removeAdmin, login, retreveAdmins } from "../use-cases/app.js";
import { makeAdmin } from "./postAdmin.js";
import { makeRemoveAdmin } from "./postRremoveAdmin.js";
import { makeUpdateAdmin } from "./postUpdateAdmin.js";
import { makeLogin } from "./postlogin.js";
import { makeGetAdmins } from "./getAdmins.js";

const postAdmin = makeAdmin(createAdmin);
const postUpdateAdmin = makeUpdateAdmin(updateAdmin);
const postRremoveAdmin = makeRemoveAdmin(removeAdmin);
const postLogin = makeLogin(login);
const getAdmins = makeGetAdmins(retreveAdmins);

export { postAdmin, postUpdateAdmin, postRremoveAdmin, postLogin, getAdmins };
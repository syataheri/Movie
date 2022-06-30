import { jwt } from "../utils/jwt.js";
import { verify } from "../utils/bcrypt.js";

import { makeCreateAdmin } from "../entity/app.js";
import { makebuildAdmin } from "./createAdmin.js";
import { makeUpdateAdmin } from "./updateAdmin.js";
import { makeRemoveAdmin } from "./removeAdmin.js";
import { makeLoginAdmin } from "./adminLogin.js";
import { makeGetAdmins } from "./retreveAdmins.js";
import { adminDB } from "../data-access/app.js";
import { EmailDuplicateError, AdminNotFoundError, EmailOrPasswordWrongError } from "../../exceptions.js";

const createAdmin = makebuildAdmin({ makeCreateAdmin, adminDB, EmailDuplicateError });
const updateAdmin = makeUpdateAdmin({ makeCreateAdmin, adminDB, AdminNotFoundError });
const removeAdmin = makeRemoveAdmin({ adminDB, AdminNotFoundError });
const login = makeLoginAdmin({ adminDB, jwt, verify, EmailOrPasswordWrongError });
const retreveAdmins = makeGetAdmins({ adminDB, AdminNotFoundError });

export { createAdmin, updateAdmin, removeAdmin, login, retreveAdmins };
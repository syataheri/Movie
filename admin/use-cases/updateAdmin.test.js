import { createAdmin, updateAdmin, removeAdmin } from "./app.js";
import { sequelize } from "../../db/db.js";
import { AdminNotFoundError, ServerError } from "../../exceptions.js";

describe("use case update admin", () => {
    let admin;

    beforeAll(async () => {
        sequelize.sync();
        await removeAdmin("syataheri8@gmail.com");
        await createAdmin({ firstName: "syamak", lastName: "taheri", email: "syataheri8@gmail.com", password: "2154@KSsjsde" });
    });

    it("given the user does not exist in database, responds with AdminNotFoundError", async () => {
        admin = { firstName: "sya", lastName: "taheri", email: "syata@gmail.com", password: "2154@KSsjsde" };
        expect(updateAdmin(admin)).rejects.toThrow(new AdminNotFoundError);
    });

    it("given the user does not exist in database, responds with 'admin successfully updated'", async () => {
        admin = { firstName: "sya", lastName: "taher", email: "syataheri8@gmail.com", password: "2154@KSs58sde" };
        expect(updateAdmin(admin)).resolves.toEqual("admin successfully updated");
    });

    it("given something went wrong in server side, respond with 500", async () => {
        admin = { firstName: "syamak", lastName: "taher", email: "syataheri8@gmail.com", password: "2154@KSs58sde" };
        sequelize.close();
        expect(updateAdmin(admin)).rejects.toThrow(new ServerError);
    });
})
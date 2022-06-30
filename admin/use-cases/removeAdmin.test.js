const { createAdmin, removeAdmin } = require("./app");
const sequelize = require("../../db/db");
const { AdminNotFoundError, ServerError } = require("../../exceptions");

describe("remove an admin", () => {
    let response;

    beforeAll(async () => {
        sequelize.sync();
        await createAdmin({ firstName: "syamak", lastName: "taheri", email: "syataheri98@gmail.com", password: "2154@KSsjsde" });
    });

    it("given admin does not exist, respondes with 'admin does not exist'", async () => {
        expect(removeAdmin("syataheri9@gmail.com")).rejects.toThrow(new AdminNotFoundError);
    });

    it("given admin does exist, respondes with 'admin deleted'", async () => {
        response = await removeAdmin("syataheri98@gmail.com");
        expect(response).toBe("admin deleted");
    });

    it("given someting went wrong in server side, respondes with 500", async () => {
        expect(removeAdmin(9)).rejects.toThrow(new ServerError);
    });
})
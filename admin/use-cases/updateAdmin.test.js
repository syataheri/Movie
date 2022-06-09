const { createAdmin, updateAdmin, removeAdmin } = require("./app");

const sequelize = require("../../db/db");

describe("use case update admin", () => {
    let admin, response;

    beforeAll(() => {
        sequelize.sync();
        createAdmin({ firstName: "syamak", lastName: "taheri", email: "syataheri8@gmail.com", password: "2154@KSsjsde" });
    });

    it("given the user does not exist in database, responds with 'admin does not exist'", async () => {
        admin = { firstName: "sya", lastName: "taheri", email: "syata@gmail.com", password: "2154@KSsjsde" };
        response = await updateAdmin(admin);
        expect(response.statusCode).toBe(404);
    });

    it("given the user does not exist in database, responds with 'admin successfully updated'", async () => {
        admin = { firstName: "sya", lastName: "taher", email: "syataheri8@gmail.com", password: "2154@KSs58sde" };
        response = await updateAdmin(admin);
        expect(response).toBe("admin successfully updated");
    });

    it("given something went wrong in server side, respond with 500", async () => {
        admin = { firstName: "syamak", lastName: "taher", password: "2154@KSs58sde" };
        response = await updateAdmin(admin);
        expect(response.statusCode).toBe(500);
    });

    afterAll(() => {
        removeAdmin("syataheri8@gmail.com");
    })
})
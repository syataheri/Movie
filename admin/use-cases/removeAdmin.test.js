const { createAdmin, removeAdmin } = require("./app");

const sequelize = require("../../db/db");

describe("remove an admin", () => {
    let response;

    beforeAll(() => {
        sequelize.sync();
        createAdmin({ firstName: "syamak", lastName: "taheri", email: "syataheri98@gmail.com", password: "2154@KSsjsde" });
    });

    it("given admin does not exist, respondes with 'admin does not exist'", async () => {
        response = await removeAdmin("syataheri9@gmail.com");
        expect(response).toBe("admin does not exist");
    });

    it("given admin does exist, respondes with 'admin deleted'", async () => {
        response = await removeAdmin("syataheri98@gmail.com");
        expect(response).toBe("admin deleted");
    });

    it("given someting went wrong in server side, respondes with 500", async () => {
        response = await removeAdmin(9);
        console.log(response)
        expect(response.statusCode).toBe(500);
    });
})
const { createAdmin } = require("./app");
const sequelize = require("../../db/db");


describe("create an admin and save it to db...", () => {
    let admin, response;

    beforeAll(() => {
        sequelize.sync();
    });

    it("given all data be set and admin saved in database successfully, respond with 'admin created successfully'", async () => {
        admin = { firstName: "sya", lastName: "taheri", email: "syataheri981@gmail.com", password: "2154@KSsjsde" };
        response = await createAdmin(admin);
        expect(response).toBe("admin created successfully");
    });

    it("given amin already exist in database, respond with 'This email exist...'", async () => {
        admin = { firstName: "sya", lastName: "taheri", email: "syataheri981@gmail.com", password: "2154@KSsjsde" };
        response = await createAdmin(admin);
        expect(response).toBe("This email exist...");
    });

    it("given something went wrong in server side, respond with 500", async () => {
        admin = {  lastName: "taheri", email: "syataheri981@gmail.com", password: "2154@KSsjsde" };
        response = await createAdmin(admin);
        expect(response.statusCode).toBe(500);
    });
});
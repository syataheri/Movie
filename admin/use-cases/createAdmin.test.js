const { removeAdmin, createAdmin } = require("./app");
const { EmailDuplicateError, ServerError } = require("../../exceptions");
const sequelize = require("../../db/db");


describe("create an admin and save it to db...", () => {
    let admin, response;

    beforeAll(async () => {
        sequelize.sync();
        await removeAdmin("syataheri@gmail.com");
    });

    it("given all data be set and admin saved in database successfully, respond with 'admin created successfully'", () => {
        admin = { firstName: "sya", lastName: "taheri", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        expect(createAdmin(admin)).resolves.toEqual("admin created successfully");
    });

    it("given amin already exist in database, respond with EmaliDuplicatorError", () => {
        admin = { firstName: "sya", lastName: "taheri", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        expect(createAdmin(admin)).rejects.toThrowError(new EmailDuplicateError);
    });

    // it("given something went wrong in server side, respond with 500", async () => {
    //     admin = { firstName: "syamak", lastName: "taheri", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
    //     sequelize.close();
    //     expect(createAdmin(admin)).rejects.toThrowError(new ServerError);
    // });

});
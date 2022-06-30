import { removeAdmin, createAdmin } from "./app.js";
import { EmailDuplicateError, ServerError } from "../../exceptions.js";
import { sequelize } from "../../db/db.js";


describe("create an admin and save it to db...", () => {
    let admin;

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
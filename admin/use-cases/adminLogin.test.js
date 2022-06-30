import { createAdmin, login, removeAdmin } from "./app.js";
import { sequelize } from "../../db/db.js";
import { EmailOrPasswordWrongError } from "../../exceptions.js";

describe("admin login", () => {
    let admin;

    beforeAll(async () => {
        sequelize.sync();
        await createAdmin(admin = { firstName: "sya", lastName: "taheri", email: "syataheri@gmail.com", password: "2154@KSsjsde" });
    });

    it("given the email is wrong, responds with 404", async () => {
        admin = { email: "sya@gmail.com", password: "123458@898" };
        expect(login(admin)).rejects.toThrow(new EmailOrPasswordWrongError);
    });

    it("given the password is wrong, responds with 404", async () => {
        admin = { email: "syataheri@gmail.com", password: "123458@898" };
        expect(login(admin)).rejects.toThrow(new EmailOrPasswordWrongError);
    });

    it("given the password is wrong, responds with 404", async () => {
        admin = { email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        expect(login(admin)).resolves;
    });

    it("given the password is wrong, responds with 404", async () => {
        admin = { email: "syataheri@gmail.com", password: "123458@898" };
        removeAdmin("syataheri@gmail.com");
        // sequelize.close();
        expect(login(admin)).rejects.toThrow(new EmailOrPasswordWrongError);
    });

    // afterAll(() => {
    //     sequelize.sync();
    // })
});
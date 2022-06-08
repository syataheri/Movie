const { login } = require("./app");
const sequelize = require("../../db/db");

describe("admin login", () => {
    let admin, response;

    beforeAll(() => {
        sequelize.sync();
    });

    it("given the email is wrong, responds with 404", async () => {
        admin = {email:"sya@gmail.com", password:"123458@898"}
        response = await login(admin);
        expect(response.statusCode).toBe(404);
    });

    it("given the password is wrong, responds with 404", async () => {
        admin = {email:"sya@gmail.com", password:"123458@898"}
        response = await login(admin);
        expect(response.statusCode).toBe(404);
    });

    
})
const { removeAdmin, createAdmin } = require("./app");
const { EmailDuplicateError, ServerError } = require("../../exceptions");
const sequelize = require("../../db/db");


describe("create an admin and save it to db...", () => {
    let admin, response;

    beforeAll(() => {
        sequelize.sync();
        
    });

    it("given all data be set and admin saved in database successfully, respond with 'admin created successfully'", async () => {
        await removeAdmin("syataheri@gmail.com");
        admin = { firstName: "sya", lastName: "taheri", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        response = await createAdmin(admin);
        expect(response).toBe("admin created successfully");
    });

    it("given amin already exist in database, respond with 'This email exist...'", async () => {
        admin = { firstName: "sya", lastName: "taheri", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        expect(createAdmin(admin)).rejects.toThrowError(new EmailDuplicateError);
    });

    it("given something went wrong in server side, respond with 500", async () => {
        admin = { firstName:"syamak" ,lastName: "taheri", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        sequelize
        expect(createAdmin(admin)).rejects.toThrowError(new ServerError);
    });

    afterAll(() => {
        removeAdmin("syataheri@gmail.com");
    })
});
const makeAdmin = require("./app")


describe("admin", () => {

    let admin, response;
    it("first name be less than 3 or more than 25 characters or have number and symbol, responds with 406", async () => {
        admin = { firstName: "s", lastName: "taheri", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        response = await makeAdmin(admin);
        expect(response.statusCode).toBe(406);

        admin = { firstName: "sssdsdfsdfsdldfsklfjsdklfjsdklfjsdj", lastName: "taheri", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        response = await makeAdmin(admin);
        expect(response.statusCode).toBe(406);

        admin = { firstName: "sya1343", lastName: "taheri", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        response = await makeAdmin(admin);
        expect(response.statusCode).toBe(406);

        admin = { firstName: "sya@", lastName: "taheri", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        response = await makeAdmin(admin);
        expect(response.statusCode).toBe(406);

    });

    it("last name be less than 3 or more than 25 characters or have number or symbols, responds with 406", async () => {
        admin = { firstName: "sya", lastName: "ta", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        response = await makeAdmin(admin);
        expect(response.statusCode).toBe(406);

        admin = { firstName: "sya", lastName: "taajdaklsdjaskljdaskldjaskldjaskld", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        response = await makeAdmin(admin);
        expect(response.statusCode).toBe(406);

        admin = { firstName: "sya", lastName: "tada11", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        response = await makeAdmin(admin);
        expect(response.statusCode).toBe(406);

        admin = { firstName: "sya", lastName: "tada@", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        response = await makeAdmin(admin);
        expect(response.statusCode).toBe(406);
    });

    it("email address be unvalid, responds with 406", async () => {
        admin = { firstName: "sya", lastName: "taheri", email: "syatahericom", password: "2154@KSsjsde" };
        response = await makeAdmin(admin);
        expect(response.statusCode).toBe(406);
    });

    it("password be weak, responds with 406", async () => {
        admin = { firstName: "sya", lastName: "taheri", email: "syataheri@gmail.com", password: "21sde" };
        response = await makeAdmin(admin);
        expect(response.statusCode).toBe(406);

        admin = { firstName: "sya", lastName: "taheri", email: "syataheri@gmail.com", password: "21sdesddadad" };
        response = await makeAdmin(admin);
        expect(response.statusCode).toBe(406);

        admin = { firstName: "sya", lastName: "taheri", email: "syataheri@gmail.com", password: "2132434234234234" };
        response = await makeAdmin(admin);
        expect(response.statusCode).toBe(406);

        admin = { firstName: "sya", lastName: "taheri", email: "syataheri@gmail.com", password: "asdasdasdasd" };
        response = await makeAdmin(admin);
        expect(response.statusCode).toBe(406);
    });

    it("some required value be missing, responds with created object", async () => {
        admin = { lastName: "taheri", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        response = await makeAdmin(admin);
        expect(response.statusCode).toBe(406);

        admin = { firstName: "sya", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        response = await makeAdmin(admin);
        expect(response.statusCode).toBe(406);

        admin = { firstName: "sya", lastName: "taheri", password: "2154@KSsjsde" };
        response = await makeAdmin(admin);
        expect(response.statusCode).toBe(406);

        admin = { firstName: "sya", lastName: "taheri", email: "syataheri@gmail.com" };
        response = await makeAdmin(admin);
        expect(response.statusCode).toBe(406);
    });

    it("all be set, responds with created object", async () => {
        admin = { firstName: "sya", lastName: "taheri", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        response = await makeAdmin(admin);
        expect(JSON.stringify(response)).toEqual(JSON.stringify(admin));
    });
});
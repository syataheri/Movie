const makeAdmin = require("./app")


describe("admin" , () => {
    it("first name be less than 3 characters, responds with 406" , async() => {
        const admin = {firstName:"s",lastName:"taheri", email:"syataheri@gmail.com", password:"2154@KSsjsde"};
        const response = await makeAdmin(admin);
        expect(response.statusCode).toThrow("NOT VALID: Invalid data");
    });
    it("last name be less than 3 characters, responds with 406" , async() => {
        const admin = {firstName:"sya",lastName:"ta", email:"syataheri@gmail.com", password:"2154@KSsjsde"};
        const response = await makeAdmin(admin);
        expect(response.statusCode).toBe(406);
    });
    it("email address be unvalid, responds with 406" , async() => {
        const admin = {firstName:"sya",lastName:"taheri", email:"syatahericom", password:"2154@KSsjsde"};
        const response = await makeAdmin(admin);
        expect(response.statusCode).toBe(406);
    });
    it("password be weak, responds with 406" , async() => {
        const admin = {firstName:"sya",lastName:"taheri", email:"syataheri@gmail.com", password:"21sde"};
        const response = await makeAdmin(admin);
        expect(response.statusCode).toBe(406);
    });
    it("all be set, responds with created object" , async() => {
        const admin = {firstName:"sya",lastName:"taheri", email:"syataheri@gmail.com", password:"2154@KSsjsde"};
        const response = await makeAdmin(admin);
        expect(response.toString()).toEqual(`{
            getFirstName: [Function: getFirstName],
            getLastName: [Function: getLastName],
            getEmail: [Function: getEmail],
            getPassword: [Function: getPassword]
          }`);
    });
});
const makeAdmin = require("./app");
const { NotValidError } = require("../../exceptions");


describe("admin", () => {

    let admin, response;
    it("first name be less than 3 or more than 25 characters or have number and symbol, responds with 406", async () => {
        admin = { firstName: "s", lastName: "taheri", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        expect(makeAdmin(admin)).rejects.toThrowError(new NotValidError);

        admin = { firstName: "sssdsdfsdfsdldfsklfjsdklfjsdklfjsdj", lastName: "taheri", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        expect(makeAdmin(admin)).rejects.toThrowError(new NotValidError);

        admin = { firstName: "sya1343", lastName: "taheri", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        expect(makeAdmin(admin)).rejects.toThrowError(new NotValidError);

        admin = { firstName: "sya@", lastName: "taheri", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        expect(makeAdmin(admin)).rejects.toThrowError(new NotValidError);

    });

    it("last name be less than 3 or more than 25 characters or have number or symbols, responds with 406", async () => {
        admin = { firstName: "sya", lastName: "ta", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        expect(makeAdmin(admin)).rejects.toThrowError(new NotValidError);

        admin = { firstName: "sya", lastName: "taajdaklsdjaskljdaskldjaskldjaskld", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        expect(makeAdmin(admin)).rejects.toThrowError(new NotValidError);

        admin = { firstName: "sya", lastName: "tada11", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        expect(makeAdmin(admin)).rejects.toThrowError(new NotValidError);

        admin = { firstName: "sya", lastName: "tada@", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        expect(makeAdmin(admin)).rejects.toThrowError(new NotValidError);
    });

    it("email address be unvalid, responds with 406", async () => {
        admin = { firstName: "sya", lastName: "taheri", email: "syatahericom", password: "2154@KSsjsde" };
        expect(makeAdmin(admin)).rejects.toThrowError(new NotValidError);
    });

    it("password be weak, responds with 406", async () => {
        admin = { firstName: "sya", lastName: "taheri", email: "syataheri@gmail.com", password: "21sde" };
        expect(makeAdmin(admin)).rejects.toThrowError(new NotValidError);

        admin = { firstName: "sya", lastName: "taheri", email: "syataheri@gmail.com", password: "21sdesddadad" };
        expect(makeAdmin(admin)).rejects.toThrowError(new NotValidError);

        admin = { firstName: "sya", lastName: "taheri", email: "syataheri@gmail.com", password: "2132434234234234" };
        expect(makeAdmin(admin)).rejects.toThrowError(new NotValidError);

        admin = { firstName: "sya", lastName: "taheri", email: "syataheri@gmail.com", password: "asdasdasdasd" };
        expect(makeAdmin(admin)).rejects.toThrowError(new NotValidError);
    });

    it("some required value be missing, responds with created object", async () => {
        admin = { lastName: "taheri", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        expect(makeAdmin(admin)).rejects.toThrowError(new NotValidError);

        admin = { firstName: "sya", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        expect(makeAdmin(admin)).rejects.toThrowError(new NotValidError);

        admin = { firstName: "sya", lastName: "taheri", password: "2154@KSsjsde" };
        expect(makeAdmin(admin)).rejects.toThrowError(new NotValidError);

        admin = { firstName: "sya", lastName: "taheri", email: "syataheri@gmail.com" };
        expect(makeAdmin(admin)).rejects.toThrowError(new NotValidError);
    });

    it("all be set, responds with created object", async () => {
        admin = { firstName: "sya", lastName: "taheri", email: "syataheri@gmail.com", password: "2154@KSsjsde" };
        expect(makeAdmin(admin)).resolves;
    });
});
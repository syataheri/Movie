const { postAdmin } = require("./app");
const sequelize = require("../../db/db");

describe("post admin cnotrller" , () => {
    let httpRequest = {} , response;

    beforeAll(() => {
        sequelize.sync();
    });

    it("given httpReequest.body has some wrong data in it, respondes with 400" , async() => {
        httpRequest.body = {};
        response = await postAdmin(httpRequest);
        expect(response.statusCode).toBe(406);
    })

    
})
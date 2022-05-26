const Validator = require("validatorjs");
const buildMakeAdmin = require("./admin");
const {NotValidError} = require("../exceptions");
const bcryptjs = require("bcryptjs");

data = ({firstName:"s",lastName:"taheri",email:"syataheri@gmail.com",password:"12345@gMS_asa"});

const isValid = (data) => {
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    let rules = {
        firstName:'required|min:3|alpha',
        lastName:'required|min:3|alpha',
        email: 'required|email',
        password: ['required',`regex:${strongPassword}`]
    };
    console.log(data)
    let validation = new Validator(data, rules);
    
    return validation;
}

const bcrypt = (password) => {
    return bcryptjs.hash(password , 12);
}

const createAdmin = buildMakeAdmin({isValid , NotValidError , bcrypt});

const makeAdmin = (data)=> {
    return createAdmin(data);
}
module.exports = makeAdmin;
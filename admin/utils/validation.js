const Joi = require('joi');

const isValid = async(data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().trim().min(3).max(25).lowercase()
        .pattern(new RegExp('^[a-z]+$')),
        lastName: Joi.string().required().trim().min(3).max(25).lowercase()
        .pattern(new RegExp('^[a-z]+$')),
        email: Joi.string().required()
            .email().message("You should enter a valid email address"),
        password: Joi.string().required()
            .pattern(new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,20})'))
            .message("password should be combinition of Upper and lower case, digits, symbol and more than 8 and less than 20 character. like: Example@28Mst"),
    });
    const err = await schema.validate(data);
    return err.error;
}

module.exports = isValid;
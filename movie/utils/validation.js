const { valid } = require('joi');
const Joi = require('joi');

const validTypes = ["series", "film", "animation"];
const validGenre = ["romantic", "action", "science fiction", "drama"];

const isValid = async (data) => {
    const schema = Joi.object({
        title: Joi.string().required().trim().lowercase().min(3).max(50).message("title should be more than two characters"),
        type: Joi.string().required().trim().min(4).max(9).lowercase()
            .custom(typeMethod, "custom validation")
            .message("movie type should be one of film, series, animation."),
        genre: Joi.string().required().trim().min(5).lowercase()
            .custom(genreMethod, "custom validation")
            .message("you shoud enter genre between romantic, action, drama, science fiction"),
        imdb: Joi.number().less(10.1).greater(1).precision(1).message("imdb should be number between 1 to 10"),
        yearOfCreation: Joi.number().required().integer().min(1920).max(2022).message("year of creation should be between 1920 to 2022"),
    countryOfCreation: Joi.string().required().trim().lowercase().min(3).max(50).message("county of Creation should be more than two characters"),
        adminId: Joi.number().required().integer().positive()
    });
    const err = await schema.validate(data);
    return err.error;
}

const typeMethod = (value, helpers) => {
    if (validTypes.includes(value)) {
        return true;
    }
    return helpers.error("any.invalid");
}

const genreMethod = (value, helpers) => {
    value = value.split(",");
    for (val of value) {
        if (!validGenre.includes(val)) {
            return helpers.error("any.invalid");
        }
    }
    return true;
}

module.exports = isValid;
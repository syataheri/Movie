const Sequelize = require("sequelize");
const sequelize = require("../../db/db");

const Movie = sequelize.define("Movie" , {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    type:{
        type:Sequelize.STRING,
        allowNull:false
    },
    genre:{
        type:Sequelize.STRING,
        required:true,
        allowNull:false
    },
    imdb:{
        type:Sequelize.STRING,
    },
    yearOfCreation:{
        type:Sequelize.STRING,
        allowNull:false
    },
    countryOfCreation:{
        type:Sequelize.STRING,
        allowNull:false
    },
    adminId:{
        type:Sequelize.INTEGER,
        references:{
            model:"Admins",
            key:"id"
        }
    }
});

module.exports = Movie;
require("dotenv").config();

const express = require("express");

const { isAuth } = require("./middleWare/app");

const { postAdmin, postUpdateAdmin, postRremoveAdmin, postLogin, getAdmins } = require("./admin/controller/app");
const { postAddMovie, postUpdateMovie, getMovies, getMovie, postRemoveMovie } = require("./movie/controller/app");
const makeExpressCallback = require("./express-callback/express-callback");

const app = express();

app.use(express.json());

app.post("/admin/signup", makeExpressCallback(postAdmin));
app.get("/admins", makeExpressCallback(getAdmins));
app.post("/admin/update", makeExpressCallback(postUpdateAdmin));
app.delete("/admin/remove/:id", makeExpressCallback(postRremoveAdmin));
app.post("/admin/login", makeExpressCallback(postLogin));
app.post("/movie/addmovie", isAuth, makeExpressCallback(postAddMovie));
app.get("/movies", makeExpressCallback(getMovies));
app.get("/movies/title", makeExpressCallback(getMovie));
app.post("/movie/update/:id", isAuth, makeExpressCallback(postUpdateMovie));
app.delete("/movie/remove/:id", isAuth, makeExpressCallback(postRemoveMovie));




app.use((err, req, res, next) => {
    const statusCode = err.statusCode;
    const data = err.data;

    res.status(statusCode).json({
        message: err.message,
        data: data
    });
})

const sequelize = require("./db/db");

sequelize.sync().then((result) => {
    app.listen(process.env.PORT, () => console.log(`listening og port ${process.env.PORT}`));
}).catch(err => console.log(err));
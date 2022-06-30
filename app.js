import dotenv from "dotenv";
dotenv.config();

import express from "express";

import { isAuth } from "./middleWare/app.js";

import { postAdmin, postUpdateAdmin, postRremoveAdmin, postLogin, getAdmins } from "./admin/controller/app.js";
import { postAddMovie, postUpdateMovie, getMovies, getMovie, postRemoveMovie } from "./movie/controller/app.js";
import { makeExpressCallback } from "./express-callback/express-callback.js";

const app = express();

app.use(express.json());

app.post("/admin/signup", makeExpressCallback(postAdmin));
app.get("/admins", makeExpressCallback(getAdmins));
app.post("/admin/update", makeExpressCallback(postUpdateAdmin));
app.delete("/admin/remove", makeExpressCallback(postRremoveAdmin));
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

import { sequelize } from "./db/db.js";

sequelize.sync().then((result) => {
    app.listen(process.env.PORT, () => console.log(`listening og port ${process.env.PORT}`));
}).catch(err => console.log(err));
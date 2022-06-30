import { addMovie } from "./app.js";
import { sequelize } from "../../db/db.js";

describe("add movie", () => {
    let movie, response;

    beforeAll(() => {
        sequelize.sync();
    });

    it("given movie data be invalid, responds with 406", async () => {
        movie = { title: "in", type: "film", imdb: 8.4, genre: "romantic", yearOfCreation: 2014, countyOfCreation: "USA", adminId: 2 };
        response = await addMovie(movie);
        expect(response.statusCode).toBe(406);
    })
})
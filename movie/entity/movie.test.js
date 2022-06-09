const makeMovie = require("./app");
const addMovie = require("../use-cases/app");

describe("movie", () => {
    let movie, response;
    it("title be less that 3 or more than 50 character , respond with 406", async () => {
        movie = ({ title: "in", type: "film", imdb: 8.4, genre: "romantic", yearOfCreation: 2014, countryOfCreation: "USA", adminId: 2 });
        // response = await makeMovie(movie);
        expect(async() => {await makeMovie(movie);}).toThrow();

        // movie = ({ title: "inadnakjdaksdalksdjaskljdaskldjadklsjldkacfjsdkljcsdklcjfsdklcd", type: "film", imdb: 8.4, genre: "romantic", yearOfCreation: 2014, countryOfCreation: "USA", adminId: 2 });
        // response = await makeMovie(movie);
        // expect(response.statusCode).toBe(406);
    });

    it("type be none of [series, film, animation], respond with 406", async () => {
        movie = ({ title: "interstaller", type: "filma", imdb: 8.4, genre: "romantic", yearOfCreation: 2014, countryOfCreation: "USA", adminId: 2 });
        response = await makeMovie(movie);
        expect(response.statusCode).toBe(406);
    });

    it("genre be none of [rmantic,scince fiction, drama, action], respond with 406", async () => {
        movie = ({ title: "interstaller", type: "film", imdb: 8.4, genre: "scinec", yearOfCreation: 2014, countryOfCreation: "USA", adminId: 2 });
        response = await makeMovie(movie);
        expect(response.statusCode).toBe(406);

        movie = ({ title: "interstaller", type: "film", imdb: 8.4, genre: "scinec, romantic", yearOfCreation: 2014, countryOfCreation: "USA", adminId: 2 });
        response = await makeMovie(movie);
        expect(response.statusCode).toBe(406);
    });

    it("imdb be between less than 1 or more than 10, respond with 406", async () => {
        movie = ({ title: "interstaller", type: "film", imdb: 81.444111, genre: "romantic", yearOfCreation: 2014, countryOfCreation: "USA", adminId: 2 });
        response = await makeMovie(movie);
        expect(response.statusCode).toBe(406);

        movie = ({ title: "interstaller", type: "film", imdb: 0.444111, genre: "romantic", yearOfCreation: 2014, countryOfCreation: "USA", adminId: 2 });
        response = await makeMovie(movie);
        expect(response.statusCode).toBe(406);

        movie = ({ title: "interstaller", type: "film", imdb: -1.444111, genre: "romantic", yearOfCreation: 2014, countryOfCreation: "USA", adminId: 2 });
        response = await makeMovie(movie);
        expect(response.statusCode).toBe(406);
    });

    it("year of creation be between less than 1920 or more than 2022 or be decimal, respond with 406", async () => {
        movie = ({ title: "interstaller", type: "film", imdb: 8.4, genre: "romantic", yearOfCreation: 2044, countryOfCreation: "USA", adminId: 2 });
        response = await makeMovie(movie);
        expect(response.statusCode).toBe(406);

        movie = ({ title: "interstaller", type: "film", imdb: 8.4, genre: "romantic", yearOfCreation: 1914, countryOfCreation: "USA", adminId: 2 });
        response = await makeMovie(movie);
        expect(response.statusCode).toBe(406);

        movie = ({ title: "interstaller", type: "film", imdb: 8.4, genre: "romantic", yearOfCreation: 1924.1, countryOfCreation: "USA", adminId: 2 });
        response = await makeMovie(movie);
        expect(response.statusCode).toBe(406);
    });

    it("country of creation be less than 3 or more than 50 charactrers, respond with 406", async () => {
        movie = ({ title: "interstaller", type: "film", imdb: 8.4, genre: "romantic", yearOfCreation: 2014, countryOfCreation: "US", adminId: 2 });
        response = await makeMovie(movie);
        expect(response.statusCode).toBe(406);

        movie = ({ title: "interstaller", type: "film", imdb: 8.4, genre: "romantic", yearOfCreation: 2014, countryOfCreation: "USAakldjjaklsdaklsdjaskldjaklsdjalskdjaklsdjaskljdask", adminId: 2 });
        response = await makeMovie(movie);
        expect(response.statusCode).toBe(406);
    });

    it("adminId be negative or decimal, respond with 406", async () => {
        movie = ({ title: "interstaller", type: "film", imdb: 8.4, genre: "romantic", yearOfCreation: 2014, countryOfCreation: "USA", adminId: 1.2 });
        response = await makeMovie(movie);
        expect(response.statusCode).toBe(406);

        movie = ({ title: "interstaller", type: "film", imdb: 8.4, genre: "romantic", yearOfCreation: 2014, countryOfCreation: "USA", adminId: -2 });
        response = await makeMovie(movie);
        expect(response.statusCode).toBe(406);
    });

    it("some required value be missing, respond with 406", async () => {
        movie = ({ type: "film", imdb: 8.4, genre: "romantic", yearOfCreation: 2014, countryOfCreation: "USA", adminId: 2 });
        response = await makeMovie(movie);
        expect(response.statusCode).toBe(406);

        movie = ({ title: "interstaller", imdb: 8.4, genre: "romantic", yearOfCreation: 2014, countryOfCreation: "USA", adminId: 2 });
        response = await makeMovie(movie);
        expect(response.statusCode).toBe(406);

        movie = ({ title: "interstaller", type: "film", imdb: 8.4, yearOfCreation: 2014, countryOfCreation: "USA", adminId: 1 });
        response = await makeMovie(movie);
        expect(response.statusCode).toBe(406);

        movie = ({ title: "interstaller", type: "film", imdb: 8.4, genre: "romantic", countryOfCreation: "USA", adminId: 1 });
        response = await makeMovie(movie);
        expect(response.statusCode).toBe(406);

        movie = ({ title: "interstaller", type: "film", imdb: 8.4, genre: "romantic", yearOfCreation: 2014, adminId: 1 });
        response = await makeMovie(movie);
        expect(response.statusCode).toBe(406);

        movie = ({ title: "interstaller", type: "film", imdb: 8.4, genre: "romantic", yearOfCreation: 2014, countryOfCreation: "USA" });
        response = await makeMovie(movie);
        expect(response.statusCode).toBe(406);
    });

    it("all data be set, respond with 406", async () => {
        movie = ({ title: "interstaller", type: "film", imdb: 8.4, genre: "romantic", yearOfCreation: 2014, countryOfCreation: "USA", adminId: 1 });
        response = await makeMovie(movie);
        expect(JSON.stringify(response)).toEqual(JSON.stringify(movie));
    });
})
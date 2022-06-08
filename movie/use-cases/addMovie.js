const makeAddMovie = ({ makeMovie, movieDB, MovieDuplicateError }) => {
    return async (data) => {
        try {
            const movie = await makeMovie(data);

            if (movie.statusCode) {
                throw movie;
            }
            const exist = await movieDB.findByTitle(movie.title);
            if (exist.length) {
                throw new MovieDuplicateError;
            }
            await movieDB.insert(data);
            return "movie created";

        } catch (error) {
            throw error;
        }
    }
}

module.exports = makeAddMovie;
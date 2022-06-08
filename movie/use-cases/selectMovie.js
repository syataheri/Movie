const makeSelectMovie = ({ movieDB, MovieNotFoundError }) => {
    return async (title) => {
        try {
            const movies = await movieDB.findByTitle(title);
            if (!movies.length) {
                throw new MovieNotFoundError;
            }
            return movies;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = makeSelectMovie;
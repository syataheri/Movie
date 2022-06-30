const makeSelectMovies = ({ movieDB, MovieNotFoundError }) => {
    return async () => {
        try {
            const movies = await movieDB.findAll();
            if (!movies.length) {
                throw new MovieNotFoundError;
            }
            return movies;
        } catch (error) {
            throw error;
        }
    }
}

export { makeSelectMovies };
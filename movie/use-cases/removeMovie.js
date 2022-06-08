const makeRemoveMovie = ({ movieDB, MovieNotFoundError, ForbiddenError }) => {
    return async ({ adminId, movieId }) => {
        try {
            console.log(movieId)
            const exist = await movieDB.findById(movieId);
            if (!exist) {
                throw new MovieNotFoundError;
            }
            if (exist.adminId !== adminId) {
                throw new ForbiddenError;
            }
            await movieDB.remove(movieId);
            return 'movie removed.'
        } catch (error) {
            throw error;
        }
    }
}

module.exports = makeRemoveMovie;
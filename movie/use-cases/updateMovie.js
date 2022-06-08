const makeUpdateMovie = ({ makeMovie, movieDB, MovieNotFoundError, ForbiddenError }) => {
    return async ({ data, movieId }) => {
        try {

            const exist = await movieDB.findById(movieId);
            if (!exist) {
                throw new MovieNotFoundError;
            }
            if (data.adminId !== exist.adminId) {
                throw new ForbiddenError;
            }

            const movie = await makeMovie(data);
            if (movie.statusCode) {
                throw movie;
            }
            const promise = [];
            for (key in movie) {
                if(movie[key] != exist[key]){
                    promise.push(movieDB.update([exist.adminId , key , movie[key]]));
                }
            }
            if(promise.length <= 0){
                return "there is nothing to modify."
            }
            await Promise.all(promise);
            
            return 'movie updated';
        } catch (error) {
            throw error;
        }
    }
}

module.exports = makeUpdateMovie;
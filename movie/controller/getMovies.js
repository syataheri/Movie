const makeGetMovies = (selectMovies) => {
    return async () => {
        try {
            const movies = await selectMovies();
            return {
                headers: {
                    'content-Type': 'application/json'
                },
                statusCode: 201,
                body: movies
            }
        } catch (e) {
            console.log(e);

            return {
                headers: {

                    'content-Type': 'application.json'
                },
                statusCode: e.statusCode,
                body: {
                    error: {
                        message: e.message
                    }
                }
            }
        }
    }
}

module.exports = makeGetMovies;
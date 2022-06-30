const makeGetMovie = (selectMovies) => {
    return async (httpRequest) => {
        try {
            const { title } = httpRequest.body;
            const movies = await selectMovies(title);
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

export { makeGetMovie };
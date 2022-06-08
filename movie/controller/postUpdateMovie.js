const makePostUpdateMovie = (updateMovie) => {
    return async (httpRequest) => {
        try {
            const data = httpRequest.body;
            data.adminId = httpRequest.adminId;
            const movieId = httpRequest.params.id;
            const result = await updateMovie({ data, movieId });

            return {
                headers: {
                    'content-Type': 'application/json'
                },
                statusCode: 201,
                body: {
                    message: result
                }
            }
        } catch (e) {
            console.log(e);

            return {
                headers: {
                    'content-Type': 'application/json'
                },
                statusCode: e.statusCode,
                body: {
                    error: {
                        message: e.message,
                        data: e.data ? e.data : ""
                    }
                }
            }
        }
    }
}

module.exports = makePostUpdateMovie;
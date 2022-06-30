const makePostRemoveMovie = (removeMovie) => {
    return async (httpRequest) => {
        try {
            const movieId = httpRequest.params.id;
            const adminId = httpRequest.adminId;

            const result = await removeMovie({ adminId, movieId });

            return {
                headers: {
                    'content-Type': 'application/json'
                },
                statusCode: 201,
                body: {
                    "message": result
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
                    error:
                    {
                        message: e.message,
                        data: e.data ? e.data : ""
                    }
                }
            }
        }

    }
}

export { makePostRemoveMovie };
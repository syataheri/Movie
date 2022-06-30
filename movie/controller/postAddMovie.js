const makePostAddMovie = (addMovie) => {
    return async (httpRequest) => {
        try {
            const data = httpRequest.body;
            const adminId = httpRequest.adminId;
            data.adminId = adminId;

            const result = await addMovie(data);

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

export { makePostAddMovie };
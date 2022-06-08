const makeUpdateAdmin = (updateAdmin) => {
    return async (httpReequest) => {
        try {
            const data = httpReequest.body;
            const result = await updateAdmin(data);

            if (result.statusCode) {
                throw result;
            }
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 201,
                body: { "message": result }
            }
        } catch (e) {
            console.log(e)

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: e.statusCode,
                body: {
                    error: {
                        message: e.message,
                        data: e.data?e.data:""
                    }
                }
            }
        }
    }
}

module.exports = makeUpdateAdmin;
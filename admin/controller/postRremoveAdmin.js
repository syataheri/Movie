const makeRemoveAdmin = (removeAdmin) => {
    return async (httpReequest) => {
        try {

            const params = httpReequest.params;

            const result = await removeAdmin(+params.id);
            
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

module.exports = makeRemoveAdmin;
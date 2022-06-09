const makeRemoveAdmin = (removeAdmin) => {
    return async (httpReequest) => {
        try {

            const {email} = httpReequest.body;

            const result = await removeAdmin(email);
            
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
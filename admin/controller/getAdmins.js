const makeGetAdmins = (retreveAdmins) => {
    return async () => {
        try {
            const admins = await retreveAdmins();
            return {
                headers: {
                    'content-Type': 'application/json'
                },
                statusCode: 201,
                body: admins
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

module.exports = makeGetAdmins;
const makeLogin = (login) => {
    return async (httpRequest) => {
        try {
            const data = httpRequest.body;
            let result = await login(data);

                // if (!result[2]) {
                //     const token = result[0];
                //     console.log(token);
                //     result = result[1];
                // }
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
                statusCode: 400,
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

module.exports = makeLogin;
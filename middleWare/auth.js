const makeIsAuth = ({ jwt, NotAuthorizedError }) => {
    return async (req, res, next) => {

        try {
            jwt.verify(req.get("Authorization").split(" ")[1], process.env.SECRET, (err, decoded) => {
                if (err) {
                    throw err;
                }
                req.adminId = decoded.adminId;
                next();
            });
        } catch (error) {
            next(new NotAuthorizedError);
        }

    }
}

module.exports = makeIsAuth;
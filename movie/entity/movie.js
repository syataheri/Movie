const makeBuildMovie = ({ isValid, NotValidError }) => {
    return async (data) => {
        try {
            const err = await isValid(data);
            if (err) {
                throw new NotValidError(err.message);
            }
            return data;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = makeBuildMovie;
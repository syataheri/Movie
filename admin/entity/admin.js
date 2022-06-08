module.exports = function buildMakeAdmin({ isValid, NotValidError, encrypt }) {
    return createAdmin = async (data) => {
        try {
            const validation = await isValid(data);
            if (validation) {
                throw new NotValidError(validation.message);
            }
            hashedPassword = await encrypt(data.password);
            data.password = hashedPassword;
            return data;
        } catch (error) {
            throw error;
        }
    }
}
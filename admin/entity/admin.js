const buildMakeAdmin = ({ isValid, NotValidError, encrypt }) => {
    return  async (data) => {

        try {
            const validation = await isValid(data);
            if (validation) {
                throw new NotValidError(validation.message);
            }
            const hashedPassword = await encrypt(data.password);
            data.password = hashedPassword;
            return data;
        } catch (error) {
            throw error;
        }
    }
}

export { buildMakeAdmin };
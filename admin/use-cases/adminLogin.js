const makeLoginAdmin = ({ adminDB, jwt, verify, EmailOrPasswordWrongError }) => {
    return async (data) => {
        try {
            let admin = await adminDB.findByEmail(data.email);

            if (admin && await verify(data.password, admin.password)) {
                const token = await jwt(admin.id);
                return [token, "login was succussfully"];
            }
            throw new EmailOrPasswordWrongError;
        } catch (error) {
            throw error;
        }
    }
}

export { makeLoginAdmin };
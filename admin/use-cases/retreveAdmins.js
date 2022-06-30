const makeGetAdmins = ({ adminDB, AdminNotFoundError }) => {
    return async () => {
        try {
            const admins = adminDB.findAll();
            if (!admins) {
                throw new AdminNotFoundError;
            }
            return admins;
        } catch (error) {
            throw error;
        }
    }
}

export { makeGetAdmins };
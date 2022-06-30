const makebuildAdmin = ({ makeCreateAdmin, adminDB, EmailDuplicateError }) => {
    return async (data) => {
        try {
            const admin = await makeCreateAdmin(data);
            const exist = await adminDB.findByEmail(admin.email);

            if (exist) {
                throw new EmailDuplicateError;
            }
            await adminDB.insert(admin);

            return "admin created successfully";
        } catch (error) {
            throw error;
        }

    }
}

export { makebuildAdmin };

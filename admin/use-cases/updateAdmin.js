const makeUpdateAdmin = ({ makeCreateAdmin, adminDB, AdminNotFoundError }) => {
    return async (data) => {
        try {
            const exist = await adminDB.findByEmail(data.email);
            if (!exist) {
                throw new AdminNotFoundError;
            }

            const admin = await makeCreateAdmin(data);
            if(admin.statusCode){
                throw admin;
            }
            const promise = [];
            for (key in admin) {
                if(admin[key] != exist[key]){
                    promise.push(adminDB.update([exist.id , key , admin[key]]));
                }
            }
            if(promise.length <= 0){
                return "there is nothing to modify."
            }
            await Promise.all(promise);
            return "admin successfully updated"
        } catch (error) {
            throw error;
        }

    }
}

module.exports = makeUpdateAdmin;
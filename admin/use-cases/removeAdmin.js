const makeRemoveAdmin = ({adminDB , AdminNotFoundError }) => {
    return async (email) => {
        try {
            const exist = await adminDB.findByEmail(email);

            if(!exist){
                return new AdminNotFoundError;
            }
            await adminDB.remove(email);
            return "admin deleted";
            
        } catch (error) {
            return error;
        }
    }
}

module.exports =  makeRemoveAdmin;
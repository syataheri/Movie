const makeRemoveAdmin = ({adminDB , AdminNotFoundError }) => {
    return async (email) => {
        try {
            const exist = await adminDB.findByEmail(email);

            if(!exist){
                throw new AdminNotFoundError;
            }
            await adminDB.remove(email);
            return "admin deleted";
            
        } catch (error) {
            throw error;
        }
    }
}

module.exports =  makeRemoveAdmin;
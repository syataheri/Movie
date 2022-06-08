const makeRemoveAdmin = ({adminDB , AdminNotFoundError }) => {
    return async (id) => {
        try {
            const exist = await adminDB.findById(id);

            if(!exist){
                return new AdminNotFoundError;
            }
            await adminDB.remove(id);
            return "admin deleted";
            
        } catch (error) {
            return error;
        }
    }
}

module.exports =  makeRemoveAdmin;
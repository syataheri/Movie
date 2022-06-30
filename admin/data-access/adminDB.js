const adminDataBase = ({ Admin, ServerError }) => {
    const findAll = async () => {
        try {
            return await Admin.findAll();
        } catch (error) {
            throw new ServerError(error);
        }
    }
    const findByEmail = async (email) => {
        try {
            return await Admin.findOne({ where: { email: email } });
        } catch (error) {
            throw new ServerError(error);
        }
    }

    const findById = async (id) => {
        try {
            return await Admin.findByPk(id);
        } catch (error) {
            throw new ServerError(error);
        }
    }

    const insert = async (data) => {
        try {
            const admin = await Admin.create(data);
            return await admin.save();
        } catch (error) {
            throw new ServerError(error);
        }

    }

    const update = async ([id, key, value]) => {
        try {
            return await Admin.update({ [key]: value }, { where: { id: id } });
        } catch (error) {
            throw new ServerError(error);
        }
    }

    const remove = async (email) => {
        try {
            return await Admin.destroy({ where: { email: email } });
        } catch (error) {
            throw new ServerError(error);
        }
    }

    return Object.freeze({
        findAll,
        findByEmail,
        insert,
        remove,
        update,
        findById
    });


}

export { adminDataBase };
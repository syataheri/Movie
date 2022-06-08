const adminDataBase = (Admin) => {
    const findAll = async () => {
        return await Admin.findAll();
    }
    const findByEmail = async (email) => {
        return await Admin.findOne({ where: { email: email } });
    }

    const findById = async (id) => {
        return await Admin.findByPk(id);
    }

    const insert = async (data) => {
        const admin = await Admin.create(data);
        return await admin.save();
    }

    const update = async ([id, key, value]) => {
        return await Admin.update({ [key]: value }, { where: { id: id } });
    }

    const remove = async (id) => {
        return await Admin.destroy({ where: { id: id } });
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

module.exports = adminDataBase;
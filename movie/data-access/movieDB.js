const makeMovieDB = ({ Movie, ServerError, Op }) => {

    const insert = async (data) => {
        try {
            const movie = await Movie.create(data);
            return await movie.save();
        } catch (error) {
            throw new ServerError(error);
        }
    }

    const findAll = async () => {
        try {
            return await Movie.findAll();
        } catch (error) {
            throw new ServerError(error);
        }
    }

    const findById = async (id) => {
        try {
            return await Movie.findByPk(id);
        } catch (error) {
            throw new ServerError(error);
        }
    }

    const findByTitle = async (title) => {
        try {
            return await Movie.findAll({ where: { title: { [Op.like]: `%${title}%` } } });
        } catch (error) {
            throw new ServerError(error);
        }
    }

    const findByGenre = async (genre) => {
        try {
            return await Movie.findOne({ where: { genre: genre } });
        } catch (error) {
            throw new ServerError(error);
        }
    }

    const update = async ([id, key, value]) => {
        try {
            return await Movie.update({ [key]: value }, { where: { id: id } });
        } catch (error) {
            throw new ServerError(error);
        }
    }

    const remove = async (id) => {
        try {
            return await Movie.destroy({ where: { id: id } });
        } catch (error) {
            throw new ServerError(error)(error);
        }
    }

    return Object.freeze({
        insert,
        findAll,
        findById,
        findByTitle,
        findByGenre,
        update,
        remove
    });
}

module.exports = makeMovieDB;
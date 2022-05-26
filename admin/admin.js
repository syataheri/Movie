module.exports = function buildMakeAdmin({ isValid, NotValidError , bcrypt}) {
    return createAdmin = async ({ firstName, lastName, email, password }) => {
        const validation = await isValid({ firstName, lastName, email, password });
        if (validation.fails()) {
            throw new NotValidError(validation.errors);
        }
        hashedPassword = await bcrypt(password);
        return Object.freeze({
            getFirstName:() => firstName,
            getLastName:() => lastName,
            getEmail:()=> email,
            getPassword:() => hashedPassword
        })
    }
}
import bcrypt from "bcrypt";

const encrypt = async (password) => {
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

const verify = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
}


export { encrypt, verify };
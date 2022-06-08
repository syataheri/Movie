const JWT = require("jsonwebtoken");

const jwt = (adminId) => {
    const token = JWT.sign({
        adminId:adminId
    }, process.env.SECRET, { expiresIn: "1h" });
    return token;
}

module.exports = jwt;
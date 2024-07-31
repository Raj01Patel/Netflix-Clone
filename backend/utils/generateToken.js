const jwt = require('jsonwebtoken');
const dotenv = require("dotenv")
const ENV_VARS = require("../config/envVars")

dotenv.config({path:'../.env'});


const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, ENV_VARS.KEY, { expiresIn: "15d" });

    res.cookie("jwt-netflix", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in MS
        httpOnly: true, // prevent XSS attacks cross-site scripting attacks, make it not be accessed by JS
        sameSite: "strict", // CSRF attacks cross-site request forgery attacks
    });

    return token;
}

module.exports = generateTokenAndSetCookie;
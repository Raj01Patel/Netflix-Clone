const dotenv = require("dotenv")
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, '../../.env') });


const ENV_VARS = {
    DATABASE_URI: process.env.DATABASE_URI,
    KEY: process.env.KEY,
    NODE_ENV: process.env.NODE_ENV,
    TMDB_API_KEY: process.env.TMDB_API_KEY,
};




module.exports = ENV_VARS;

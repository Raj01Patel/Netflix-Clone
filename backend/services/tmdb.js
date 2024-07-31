const axios = require("axios")
const dotenv = require("dotenv")
const ENV_VARS = require("../config/envVars")

dotenv.config({ path: '../.env' });


const fetchFromTMDB = async (url) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ENV_VARS.TMDB_API_KEY}`,
        }
    };

    const response = await axios.get(url, options);

    if (response.status !== 200) {
        throw new Error("Failed to fetch data from TMDB" + response.statusText);
    }

    return response.data;
}

module.exports = fetchFromTMDB;
const express = require("express");
const authRoute = require("./routes/authRoute")
const movieRoute = require("./routes/movieRoute")
const tvRoute = require("./routes/tvRoute")
const searchRoute = require("./routes/searchRoute")
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authMiddleware = require("./middleware/authMiddleware");
const cookieParser = require("cookie-parser");
const path = require("path")
const ENV_VARS = require("./config/envVars")


const app = express();


app.use(express.json());
app.use(cookieParser());


mongoose.connect(ENV_VARS.DATABASE_URI)
    .then(() => console.log("DB Connected Successfully"))
    .catch((err) => console.log("Error connecting DB", err));

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/movie", authMiddleware, movieRoute);
app.use("/api/v1/tv", authMiddleware, tvRoute);
app.use("/api/v1/search", authMiddleware, searchRoute);

if (ENV_VARS.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,'../', "/frontend/dist")));
}

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,'../', "frontend", "dist", "index.html"));
})

app.listen(5000, () => {
    console.log("Server is running on PORT 5000");
})



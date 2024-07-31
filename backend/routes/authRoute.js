const express = require("express");
const authcontroller = require("../controllers/authController")
const authMiddleware = require("../middleware/authMiddleware")

const router = express.Router();

router.post("/signup", authcontroller.signup)
router.post("/login", authcontroller.login)
router.post("/logout", authcontroller.logout)
router.get("/authCheck",authMiddleware, authcontroller.authCheck)



module.exports = router
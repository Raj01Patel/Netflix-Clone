const UserModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const generateTokenAndSetCookie = require("../utils/generateToken")



const signup = async (req, res) => {

    try {
        const { email, password, username } = req.body;

        if (!email || !password || !username) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false, message: "Invalid email"
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters"
            });
        }

        const existingUserByEmail = await UserModel.findOne({ email: email });

        if (existingUserByEmail) {
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });
        }

        const existingUserByUsername = await UserModel.findOne({ username: username });

        if (existingUserByUsername) {
            return res.status(400).json({
                success: false,
                message: "Username already exists"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];

        const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];

        const newUser = new UserModel({
            email,
            password: hashPassword,
            username,
            image,
        });

        generateTokenAndSetCookie(newUser._id, res)

        await newUser.save();

        res.json({
            success: true,
            user: {
                ...newUser._doc,
                password: "",
            }
        })
    }
    catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }

}

const login = async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const user = await UserModel.findOne({ email: email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        generateTokenAndSetCookie(user._id, res);

        res.json({
            success: true,
            ...user._doc,
            password:""
        })

    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie("jwt-netflix");
        res.status(200).json({
            success: true,
            message: "Logged out successfully"
        }
        );
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

const authCheck = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            user: req.user,
        })
    }
    catch (error) {
        console.log("Error in authCheck controller", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        })
    }
}

const authcontroller = {
    signup,
    login,
    logout,
    authCheck,
}

module.exports = authcontroller
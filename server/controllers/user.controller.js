const { createSignedToken } = require("../authentication/jwt.authentication");
const User = require("../models/user.model")
const bcrypt = require('bcrypt');

async function userSignup(req, res) {
    const { userName, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        userName,
        email,
        password: hashedPassword
    })

    if (user) {
        // return res.status(200).json({ message: "Login successful" });
        const token = createSignedToken(user);
        return res.cookie("token", token, { httpOnly: true }).json({ message: "Signup successful" });
    } else {
        return res.status(401).json({ message: "Invalid email or password" });
    }
}

async function userLogin(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const match = await bcrypt.compare(password, user.password);
        if (match) {
            const token = createSignedToken(user);

            return res.cookie("token", token, { httpOnly: true }).json({ message: "Login successful" });
        } else {
            return res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    userSignup,
    userLogin
}
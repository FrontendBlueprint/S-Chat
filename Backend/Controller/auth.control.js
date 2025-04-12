import bcrypt from 'bcrypt';
import User from '../models/user.model.js';
import generateTokenAndSetCookie from '../utils/JwtToken.js';

export const signup = async (req, res) => {
    try {
        const { fullname, username, password, } = req.body;

        // Validation
        if (!fullname || !username || !password) {
            return res.status(400).json({
                success: false,
                error: "Please fill in all required fields"
            });
        }

        if (password.length < 6) { // Updated to match the error message
            return res.status(400).json({
                success: false,
                error: "Password must be at least 6 characters"
            });
        }


        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                error: "Username already exists"
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // profile

        const userprofile = `https://avatar.iran.liara.run/username?username=${username}&bold=false&length=1`

        // Create new user
        const newUser = new User({
            fullname,
            username,
            password: hashedPassword,
            profile: userprofile, // Use provided profile or default
        });


        await newUser.save();

        // Generate token and set cookie
        generateTokenAndSetCookie(newUser.id, res);

        return res.status(201).json({
            success: true,
            fullname: newUser.fullname,
            username: newUser.username,
            profile: newUser.profile,
            message: "Account created successfully"
        });

    } catch (error) {
        console.error("Error in signup controller:", error.message);

        // Return a more specific error message if possible
        return res.status(500).json({
            success: false,
            error: "Internal server error. Please try again later."
        });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({
                success: false,
                error: "Invalid username or password",
            });
        }

        // Verify password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({
                success: false,
                error: "Invalid username or password",
            });
        }

        // Generate token and set cookie
        generateTokenAndSetCookie(user._id, res);

        // Send success response
        return res.status(200).json({
            success: true,
            _id: user._id,
            fullname: user.fullname, // Ensure this matches your schema
            username: user.username,
            profile: user.profile,
        });
    } catch (error) {
        console.error("Error in login controller:", error.message);
        return res.status(500).json({
            success: false,
            error: "Internal Server Error",
        });
    }
};

export const logout = async (req, res) => {
    try {
        // Clear the JWT cookie
        res.cookie("jwt", "", { maxAge: 0, httpOnly: true, sameSite: "strict" });

        // Send success response
        return res.status(200).json({
            success: true,
            message: "Logout successfully from S-Chat",
        });
    } catch (error) {
        console.error("Error in logout controller:", error.message);

        // Send error response
        return res.status(500).json({
            success: false,
            error: "Internal Server Error",
        });
    }
};


import bcrypt from 'bcrypt';
import User from '../models/user.model.js';

export const signup = async (req, res) => {
    try {
        const { fullname, username, password } = req.body;

        // Validation
        if (!fullname || !username || !password) {
            return res.status(400).json({ 
                success: false,
                error: "Please fill in all required fields" 
            });
        }

        if (password.length < 6) {
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

        // Create new user
        const newUser = new User({
            fullname,
            username,
            password: hashedPassword, // Save hashed password
        });

        await newUser.save();

        return res.status(201).json({
            success: true,
            fullname: newUser.fullname,
            username: newUser.username,
            message: "Account created successfully"
        });

    } catch (error) {
        console.error("Error in signup controller:", error.message);
        return res.status(500).json({ 
            success: false,
            error: "Internal server error" 
        });
    }
};
import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    try {
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined in environment variables");
        }

        const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.cookie("jwt", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
            httpOnly: true, // Prevent XSS attacks
            sameSite: "strict", // Prevent CSRF attacks (use "lax" if cross-origin requests are needed)
            secure: process.env.NODE_ENV !== "development", // Use secure cookies in production
        });
    } catch (error) {
        console.error("Error generating token or setting cookie:", error.message);
        throw new Error("Failed to generate token or set cookie");
    }
};

export default generateTokenAndSetCookie;
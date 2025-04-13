import jwt from 'jsonwebtoken'
import User from '../../models/user.model.js';

export const protectroute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(500).json({ error: "invalid token" })
        }

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(500).json({ error: "user not found" })
        }

        req.user = { _id: decoded.userId };


        next();

    } catch (error) {
        console.error("Error in sendmessage controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}  

export default protectroute
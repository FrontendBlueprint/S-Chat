import jwt from 'jsonwebtoken'

export const protectroute = (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return console.log("erorr token not found", error);
        }

        const decoded =jwt.verify(token, process.env.JWT_SECRET)


    } catch (error) {
        console.log("erorr in protect middleware", error);
        res.status(500).json({error:"internal server"})
    }
}  
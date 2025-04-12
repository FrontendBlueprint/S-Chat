import express from "express";
import authroutes from "./Routes/authroutes.js";
import messageroutes from "./Routes/messageroutes.js";
import dotenv from "dotenv";
import connectMongoBd from "./MongoDb/Connect.js";
import cookieParser from "cookie-parser";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth/", authroutes);
app.use("/api/message/", messageroutes);

// Start the server
app.listen(PORT, async () => {
    try {
        await connectMongoBd();
        console.log(`Server is running on http://localhost:${PORT}/api/auth/sign`);
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
    }
});
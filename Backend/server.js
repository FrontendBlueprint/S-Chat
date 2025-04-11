import express from "express"
import authroutes from "./Routes/authroutes.js"
import dotenv from "dotenv"
import connectMongoBd from "./MongoDb/Connect.js";
dotenv.config()

const PORT = process.env.PORT || 5000;
const app = express();

app.use("/api/auth/",authroutes)

app.listen(PORT, () => {
    connectMongoBd()
    console.log("server is start");
});

//middle ware
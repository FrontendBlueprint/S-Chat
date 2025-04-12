import express from "express"
import { sendmessage } from "../Controller/messagecontoller.js";
import { protectroute } from "./Middleware/protectRoute.js";

const router = express.Router()

router.post("/send/:id", protectroute , sendmessage)


export default router;
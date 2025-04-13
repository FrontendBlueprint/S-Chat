import express from "express"
import { getMessages, sendmessage } from "../Controller/messagecontoller.js";
import { protectroute } from "./Middleware/protectRoute.js";

const router = express.Router()

router.get("/:id" , protectroute , getMessages)

router.post("/send/:id", protectroute , sendmessage)


export default router;
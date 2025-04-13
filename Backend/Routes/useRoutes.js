import express from "express";
import protectRoute from "../Routes/Middleware/protectRoute.js";
import { getUsersForSidebar } from "../Controller/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);

export default router;
import express from "express"
import { signup } from "../Controller/auth.control.js";
const router = express.Router();

router.post("/sign", signup);

export default router

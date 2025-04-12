import express from "express"
import { login, logout, signup } from "../Controller/auth.control.js";
const router = express.Router();

router.post("/sign", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router

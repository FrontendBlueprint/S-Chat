import express from "express"
import { signup } from "../Controller/AuthContriller";
const router = express.Router();

router.get("/sign", signup);

router.get("/login",)

router.get("/",)

export default router

import { Router } from "express";
import userController from "../controllers/userController.js";
import upload from "../config/upload.js";

const router = Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.put("/edit/:id", upload.single("image"), userController.edit);

export default router;

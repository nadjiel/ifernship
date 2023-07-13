import { Router } from "express";
import userController from "../controllers/userController.js";
import upload from "../config/upload.js";

const router = Router();

router.get("/", userController.listUsers);
router.get("/:id", userController.findUser);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.put("/edit/:id", upload.single("image"), userController.edit);
router.delete("/", userController.deleteUser);

export default router;

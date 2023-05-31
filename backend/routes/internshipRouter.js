import { Router } from "express";
import internshipController from "../controllers/internshipController.js";

const router = Router();

router.get("/", internshipController.listInternships);
router.get("/:id", internshipController.findInternship);
router.post("/", internshipController.saveInternship);
router.delete("/:id", internshipController.deleteInternship);
router.put("/:id", internshipController.updateInternship);

export default router;

import { Router } from "express";
import enterpriseController from "../controllers/enterpriseController.js";

const router = Router();

router.get("/", enterpriseController.listEnterprises);
router.get("/:id", enterpriseController.findEnterprise);
router.post("/", enterpriseController.saveEnterprise);
router.delete("/:id", enterpriseController.deleteEnterprise);
router.put("/:id", enterpriseController.updateEnterprise);

export default router;

import { Router } from "express";
import enterpriseController from "../controllers/enterpriseController.js";
import { verifyTokenAuthentication } from "../middlewares/authentication.js";
import upload from "../config/upload.js";

const router = Router();

router.get(
  "/",
  verifyTokenAuthentication,
  enterpriseController.listEnterprises
);
router.get(
  "/:id",
  verifyTokenAuthentication,
  enterpriseController.findEnterprise
);
router.post(
  "/",
  verifyTokenAuthentication,
  upload.single("image"),
  enterpriseController.saveEnterprise
);
router.delete(
  "/:id",
  verifyTokenAuthentication,
  enterpriseController.deleteEnterprise
);
router.put(
  "/:id",
  verifyTokenAuthentication,
  upload.single("image"),
  enterpriseController.updateEnterprise
);

export default router;

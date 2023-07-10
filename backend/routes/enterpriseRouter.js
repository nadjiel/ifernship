import { Router } from "express";
import enterpriseController from "../controllers/enterpriseController.js";
import { verifyTokenAuthentication } from "../middlewares/authentication.js";

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
  enterpriseController.updateEnterprise
);

export default router;

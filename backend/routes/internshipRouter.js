import { Router } from "express";
import internshipController from "../controllers/internshipController.js";
import { verifyTokenAuthentication } from "../middlewares/authentication.js";

const router = Router();

router.get(
  "/",
  verifyTokenAuthentication,
  internshipController.listInternships
);
router.get(
  "/:id",
  verifyTokenAuthentication,
  internshipController.findInternship
);
router.post(
  "/",
  verifyTokenAuthentication,
  internshipController.saveInternship
);
router.delete(
  "/:id",
  verifyTokenAuthentication,
  internshipController.deleteInternship
);
router.put(
  "/:id",
  verifyTokenAuthentication,
  internshipController.updateInternship
);

export default router;

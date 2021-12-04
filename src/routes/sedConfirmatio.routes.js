import { Router } from "express";
import { Confirmation } from "../controllers/sendConfirmacion";

const router = Router();

router.post("/code", Confirmation);

export default router;

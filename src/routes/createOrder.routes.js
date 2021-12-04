import { Router } from "express";
import {
  createOrder,
  getOrders,
  cancelOrder,
} from "../controllers/createOrder.controller";

const router = Router();

router.post("/create-order", createOrder);

router.get("/getOrders", getOrders);

router.delete("/:_id", cancelOrder);

export default router;

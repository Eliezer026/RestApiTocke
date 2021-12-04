import { Router } from "express";
import * as productsControllers from "../controllers/products.controller";
import { verifyToken } from "../middlewares";
const router = Router();

router.post("/", verifyToken, productsControllers.createProduct);
router.get("/", productsControllers.getProduct);
router.get("/:productId", verifyToken, productsControllers.getProductById);
router.put("/:productId", verifyToken, productsControllers.updateProductsById);
router.delete(
  "/:productId",
  verifyToken,
  productsControllers.deleteProductById
);

module.exports = router;

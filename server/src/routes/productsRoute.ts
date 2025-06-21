import express from "express";
import { getAllProducts, getProductWithCategory } from "../controllers/productController";

const router = express.Router();

// GET /api/products
router.get("/", getAllProducts);

router.get("/:categoryId", getProductWithCategory);

export default router;

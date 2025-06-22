import express from "express";
import {
  getAllProducts,
  getProductWithCategory,
  getProductWithSearchParam,
} from "../controllers/productController";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/category/:categoryId", getProductWithCategory);
router.get("/search/:searchTerm", getProductWithSearchParam);

export default router;

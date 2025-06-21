import express from "express";
import { getAllCategory } from "../controllers/categoryController";

const router = express.Router();

// GET /api/productCategory
router.get("/", getAllCategory);

export default router;

import express from "express";
import { getCompany } from "../controllers/companyController";

const router = express.Router();

// GET /api/company
router.get("/", getCompany);

export default router;

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import prodductsRoute from "./routes/productsRoute";
import companyRoute from "./routes/companyRoute";
import productCategory from "./routes/categoryRoute";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("POS API running!");
});

// Mount product routes
app.use("/api/products", prodductsRoute);

// Mount company routes
app.use("/api/company", companyRoute);

// Mount category routes
app.use("/api/productCategory", productCategory);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

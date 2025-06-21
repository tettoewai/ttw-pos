import { Request, Response } from "express";
import prisma from "../lib/prisma";
export const getAllProducts = async (req: Request, res: Response) => {
  const products = await prisma.product.findMany();
  res.json(products);
};

export const getProductWithCategory = async (req: Request, res: Response) => {
  const categoryId = Number(req.params.categoryId);

  const productCatProduct = await prisma.productCateogryProduct.findMany({
    where: { productCategoryId: categoryId },
  });

  const productId = productCatProduct.map((item) => item.productId);
  const products = await prisma.product.findMany({
    where: { id: { in: productId } },
  });
  res.status(200).json(products);
};

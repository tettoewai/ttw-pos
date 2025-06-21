import { Request, Response } from "express";
import prisma from "../lib/prisma";
export const getAllProducts = async (req: Request, res: Response) => {
  const products = await prisma.product.findMany();
  res.json(products);
};

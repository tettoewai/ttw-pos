import { Request, Response } from "express";
import prisma from "../lib/prisma";
export const getAllCategory = async (req: Request, res: Response) => {
  const categories = await prisma.productCateogry.findMany();
  res.json(categories);
};

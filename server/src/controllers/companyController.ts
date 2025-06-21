import { Request, Response } from "express";
import prisma from "../lib/prisma";
export const getCompany = async (req: Request, res: Response) => {
  const company = await prisma.company.findFirst({ where: { id: 1 } });
  res.json(company);
};

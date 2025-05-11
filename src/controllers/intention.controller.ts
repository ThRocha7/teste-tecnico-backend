import { Request, Response } from "express";
import { createRegisterIntention } from "../model/register.model";

export const registerIntention = async (req: Request, res: Response) => {
  try {
    const result = await createRegisterIntention(req.body);
    return res.status(201).json({ message: result });
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const updateIntention = (req: Request, res: Response) => {};

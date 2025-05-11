import { Request, Response } from "express";
import { createRegisterLead } from "../model/register.model";

export const registerLead = async (req: Request, res: Response) => {
  try {
    const result = await createRegisterLead(req.body);
    return res.status(201).json({ message: result });
  } catch (error) {
    return res.status(422).send("Invalid registration");
  }
};

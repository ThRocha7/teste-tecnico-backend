import { Request, Response } from "express";
import {
  createRegisterIntention,
  updateRegisterIntention,
} from "../model/register.model";

export const registerIntention = async (req: Request, res: Response) => {
  try {
    const result = await createRegisterIntention(req.body);
    return res.status(201).json({ message: result });
  } catch (error) {
    return res.status(422).send("Invalid registration");
  }
};

export const updateIntention = async (req: Request, res: Response) => {
  try {
    const intention_id = req.params.intention_id;
    const result = await updateRegisterIntention(intention_id, req.body);
    return res.status(200).json({ message: result });
  } catch (error) {
    return res.status(422).send("Registration not updated");
  }
};

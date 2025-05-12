import { Request, Response } from "express";
import { createRegisterLead } from "../model/register.model";
import { welcomeEmail } from "../model/sendEmail.model";

export const registerLead = async (req: Request, res: Response) => {
  try {
    const result = await createRegisterLead(req.body);
    const resultSendEmail = await welcomeEmail(result.email, result.username);
    result.sent_email = resultSendEmail;
    return res.status(201).json({ message: result });
  } catch (error) {
    return res.status(400).json({ error: "Invalid registration" });
  }
};

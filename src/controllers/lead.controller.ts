import { Request, Response } from "express";
import { createRegisterLead } from "../model/register.model";
import { welcomeEmail } from "../model/sendEmail.model";

export const registerLead = async (req: Request, res: Response) => {
  try {
    const result = await createRegisterLead(req.body);
    const resultSendEmail = await welcomeEmail(req.body.email, req.body.name);
    result.sent_email = resultSendEmail;
    return res.status(201).json({ message: result });
  } catch (error) {
    console.log(error);
    if (
      error.message ===
      'duplicate key value violates unique constraint "leads_email_key"'
    ) {
      return res.status(400).json({ error: "Email aredy register" });
    }
    return res.status(400).json({ error: "Invalid registration" });
  }
};

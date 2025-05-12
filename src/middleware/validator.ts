import { Request, Response, NextFunction } from "express";

const validateLength = (info: string) => {
  if (info.length == 9 && info.includes("-", 5)) {
    return true;
  }

  return false;
};

export const validateBodyIntention = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { zipcode_start, zipcode_end } = req.body;

  if (!zipcode_start || !zipcode_end) {
    return res.status(400).send("Missing required field");
  }

  if (typeof zipcode_start !== "string" || typeof zipcode_end !== "string") {
    return res.status(422).send("The data type is invalid");
  }

  if (!validateLength(zipcode_start) || !validateLength(zipcode_end)) {
    return res.status(422).send("Expected 9 characters for all parameters");
  }
  next();
};

export const validateBodyLeads = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send("Missing required field");
  }

  if (typeof name !== "string" || typeof email !== "string") {
    return res.status(400).send("The data type is invalid");
  }
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regexEmail.test(email)) {
    return res.status(422).send("Invalid email format");
  }
  const regexName = /^[a-zA-Z0-9]+$/;

  if (name.length < 2 || regexName.test(name)) {
    return res.status(422).send("Invalid name");
  }
  next();
};

export const validatePutIntention = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { lead_id } = req.body;
  const intention_id = req.params.intention_id;
  const regex = /^\d+$/;

  if (!lead_id || !intention_id) {
    return res.status(400).send("Missing required field");
  }

  if (typeof intention_id !== "string" || !regex.test(intention_id)) {
    return res.status(400).send("The parameter intention_id is invalid");
  }

  if (typeof lead_id !== "string" || !regex.test(lead_id)) {
    return res.status(422).send("The provided lead_id is invalid");
  }

  next();
};

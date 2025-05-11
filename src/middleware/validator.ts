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
    return res.status(400).send("The data type is invalid");
  }

  if (!validateLength(zipcode_start) || !validateLength(zipcode_end)) {
    return res.status(422).send("Expected 9 characters for all parameters");
  }
  next();
};

// export const validateBodyLeads = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//     const { name, email } = req.body;
//     if (!name || !email) {
//     return res.status(400).send("Missing required field");
//   }

//   if (typeof name !== "string" || typeof email !== "string") {
//     return res.status(400).send("The data type is invalid");
//   }

//   if (!email.includes("@"))
// };

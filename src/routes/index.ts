import { Express } from "express";
import {
  registerIntention,
  updateIntention,
} from "../controllers/intention.controller";
import { registerLead } from "../controllers/lead.controller";
import {
  validateBodyIntention,
  validateBodyLeads,
  validatePutIntention,
} from "../middleware/validator";

function routes(app: Express) {
  /**
   * @openapi
   * /intention:
   *  post:
   *     tags:
   *     - intention
   *     description: Responds if the app is up and running
   *     responses:
   *       201:
   *         description: App is up and running
   */
  app.post("/intention", validateBodyIntention, registerIntention);

  app.put("/intention/:intention_id", validatePutIntention, updateIntention);

  app.post("/lead", validateBodyLeads, registerLead);
}

export default routes;

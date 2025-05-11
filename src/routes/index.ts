import { Express } from "express";
import {
  registerIntention,
  updateIntention,
} from "../controllers/intention.controller";
import { registerLead } from "../controllers/lead.controller";
import {
  validateBodyIntention,
  validateBodyLeads,
} from "../middleware/validator";
// import { consult } from "../controllers/apagar";

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

  app.put("/intention/:intention_id", updateIntention);

  app.post("/lead", validateBodyLeads, registerLead);

  // app.get("/consult/:table", consult);
}

export default routes;

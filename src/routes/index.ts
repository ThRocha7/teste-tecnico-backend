import { Express } from "express";
import { intention, intentionUpdate } from "../controllers/intention.controller";
import { registerLead } from "../controllers/lead.controller";

function routes(app: Express) {
  /**
   * @openapi
   * /intention:
   *  get:
   *     tags:
   *     - intention
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  app.post("/intention", intention);

  app.put("/intention/{intention_id}", intentionUpdate);

  app.post("/lead", registerLead);
}

export default routes;
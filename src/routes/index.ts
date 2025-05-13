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
   *   post:
   *     tags:
   *       - intention
   *     description: Creates a new intention
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               zipcode_start:
   *                 type: string
   *                 example: 12312-123
   *               zipcode_end:
   *                 type: string
   *                 example: 12312-123
   *             required:
   *               - zipcode_start
   *               - zipcode_end
   *     responses:
   *       201:
   *         description: Intention successfully created
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 id:
   *                   type: integer
   *                   example: 1
   *                 zipcode_start:
   *                   type: string
   *                   example: 12312-123
   *                 zipcode_end:
   *                   type: string
   *                   example: 12312-321
   *                 craete_at:
   *                   type: string
   *                   example: 2025-05-13T07:24:36.907Z
   *                 lead_id:
   *                   type: integer
   *                   nullable: true
   *                   example: null
   *       400:
   *         description: Missing required field or parameters are equals
   *         content:
   *           text/plain:
   *             schema:
   *               type: string
   *               example: Missing required field
   *       422:
   *         description: Validation error (wrong type or format)
   *         content:
   *           text/plain:
   *             schema:
   *               type: string
   *               example: The data type is invalid
   */
  app.post("/intention", validateBodyIntention, registerIntention);

  /**
   * @openapi
   * /intention/{intention_id}:
   *   put:
   *     tags:
   *       - intention
   *     description: Updates an intention by assigning a lead_id
   *     parameters:
   *       - in: path
   *         name: intention_id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the intention to update
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               lead_id:
   *                 type: string
   *                 example: "1"
   *             required:
   *               - lead_id
   *     responses:
   *       200:
   *         description: Intention successfully updated
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: object
   *                   properties:
   *                 id:
   *                   type: integer
   *                   example: 1
   *                 zipcode_start:
   *                   type: string
   *                   example: 12312-123
   *                 zipcode_end:
   *                   type: string
   *                   example: 12312-321
   *                 craete_at:
   *                   type: string
   *                   example: 2025-05-13T07:24:36.907Z
   *                 lead_id:
   *                   type: integer
   *                   nullable: true
   *                   example: 1
   *       400:
   *         description: Missing required field or invalid path parameter
   *         content:
   *           text/plain:
   *             schema:
   *               type: string
   *               example: Missing required field
   *       422:
   *         description: Invalid input value
   *         content:
   *           text/plain:
   *             schema:
   *               type: string
   *               example: The provided lead_id is invalid
   */
  app.put("/intention/:intention_id", validatePutIntention, updateIntention);

  /**
   * @openapi
   * /lead:
   *   post:
   *     tags:
   *       - lead
   *     description: Creates a new lead and sends a confirmation email
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *                 example: fulano
   *               email:
   *                 type: string
   *                 format: email
   *                 example: fulano@email.com
   *             required:
   *               - name
   *               - email
   *     responses:
   *       201:
   *         description: Lead successfully created and email sent
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 id:
   *                   type: integer
   *                   example: 42
   *                 name:
   *                   type: string
   *                   example: fulano
   *                 email:
   *                   type: string
   *                   example: fulano@email.com
   *                 craete_at:
   *                   type: string
   *                   example: 2025-05-13T07:24:36.907Z
   *                 sent_email:
   *                   type: boolean
   *                   example: true
   *
   *       400:
   *         description: Missing required field or invalid data type
   *         content:
   *           text/plain:
   *             schema:
   *               type: string
   *               example: Missing required field
   */
  app.post("/lead", validateBodyLeads, registerLead);
}

export default routes;

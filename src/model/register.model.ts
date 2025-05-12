import { query } from "../../infra/database";
import { postIntention, postLead, putIntention } from "../utils/interfaces";

export const createRegisterIntention = async (datas: postIntention) => {
  try {
    const sqlQuery =
      "INSERT INTO intentions(zipcode_start, zipcode_end) VALUES ($1, $2) RETURNING *";
    const response = await query(sqlQuery, [
      datas.zipcode_start,
      datas.zipcode_end,
    ]);
    return response.rows[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createRegisterLead = async (datas: postLead) => {
  try {
    const sqlQuery =
      "INSERT INTO leads(name, email) VALUES ($1, $2) RETURNING *";
    const response = await query(sqlQuery, [
      datas.name.toLowerCase(),
      datas.email.toLowerCase(),
    ]);
    return response.rows[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateRegisterIntention = async (
  intention_id: string,
  datas: putIntention
) => {
  try {
    const sqlQuery =
      "UPDATE intentions SET lead_id = $1 WHERE id = $2 RETURNING *";
    const response = await query(sqlQuery, [intention_id, datas.lead_id]);
    return response.rows[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

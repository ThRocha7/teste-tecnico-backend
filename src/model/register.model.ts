import { query } from "../../infra/database";
import { postIntention } from "../utils/interfaces";

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

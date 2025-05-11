import { Request, Response } from 'express';
import { query } from "../../infra/database"

export const intention = async (req:Request, res:Response) => {
    return res.status(200).json({message: await query("SELECT 1+1", [])})
}

export const intentionUpdate = (req: Request, res: Response) => {
    
}
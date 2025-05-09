import { Request, Response } from 'express';

export const intention = (req:Request, res:Response) => {
    return res.status(200).json({message: "deu bom!"})
}

export const intentionUpdate = (req: Request, res: Response) => {
    
}
import { Request, Response, Router } from "express";
import { lsatMiddleware } from "l402ify-middleware";
import dotenv from 'dotenv';

dotenv.config();

const apiRoutes = Router();

apiRoutes.post("/", lsatMiddleware(21, {lnAddress: process.env.LIGHTNING_ADDRESS, rootKey: process.env.SIGNING_KEY, location: process.env.LOCATION}), (req: Request, res: Response) => {
    res.send("Great Success");
});


export default apiRoutes;

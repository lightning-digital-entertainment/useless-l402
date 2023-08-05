import { Request, Response, Router } from "express";
import { lsatMiddleware } from "../l402/middleware";

const apiRoutes = Router();

apiRoutes.post("/", lsatMiddleware, (req: Request, res: Response) => {
    res.send("Great Success");
});

export default apiRoutes;

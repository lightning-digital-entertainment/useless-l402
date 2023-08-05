import { Lsat } from "lsat-js";
import { getLsatToChallenge, verifyLsatToken } from "./utils";

async function lsatMiddleware(req, res, next) {
  if (!req.headers.authorization || !verifyLsatToken(req.headers.authorization, req.body)) {
    const lsat = await getLsatToChallenge(req.body, parseInt(process.env.SATS_AMOUNT!, 10));
    return res.setHeader('WWW-Authenticate', lsat.toChallenge()).status(402).send('Payment required!');
  }
  next();
}
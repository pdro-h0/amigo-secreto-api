import { RequestHandler } from "express";
import { makeUserService } from "../services/factories/make-user-factories";

const authService = makeUserService();

export const validate: RequestHandler = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ error: "Acesso negado" });
  }

  const token = req.headers.authorization.split(" ")[1];

  if (!authService.validateToken(token)) {
    return res.status(403).json({ error: "Acesso negado" });
  }

  next();
};

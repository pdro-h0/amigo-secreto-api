import { RequestHandler } from "express";
import z from "zod";
import { makeUserService} from "../../services/factories/make-user-factories";

export const auth: RequestHandler = (req, res) => {
  const loginBodySchema = z.object({
    password: z.string()
  });

  try {
    const { password } = loginBodySchema.parse(req.body);

    const authService = makeUserService();

    const doesPasswordMatches = authService.validatePassword(password);

    if(doesPasswordMatches === false){
        return res.status(403).json({ error: "Acesso negado" })
    }

    return res.json({ token: authService.createToken(password) })
  } catch (error) {
    return res.status(400).json({ error });
  }
};

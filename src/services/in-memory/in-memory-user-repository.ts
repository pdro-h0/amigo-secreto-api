import { env } from "../../env";
import { UserRepository } from "../../repositories/user-repository";
import { getToday } from "../../utils/get-today";

export class InMemoryUserRepository implements UserRepository {
  validateToken(token: string) {
    const currentPassword = getToday().split("/").join("");
    const currentToken = `${env.DEFAULT_TOKEN}${currentPassword}`;

    return token === currentToken;
  }

  validatePassword(password: string) {
    const currentPassword = getToday().split("/").join("");

    return password === currentPassword;
  }
}

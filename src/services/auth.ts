import { env } from "../env";
import { UserRepository } from "../repositories/user-repository";
import { getToday } from "../utils/get-today";

export class AuthService {
  constructor(private userRepository: UserRepository){}
  validatePassword(password: string) {
    const currentPassword = getToday().split("/").join("");
    return password === currentPassword;
  }

  createToken() {
    const currentPassword = getToday().split("/").join("");

    return `${env.DEFAULT_TOKEN}${currentPassword}`;
  }

  validateToken(token: string) {
    const currentToken = this.createToken();
    return token === currentToken;
  }
}

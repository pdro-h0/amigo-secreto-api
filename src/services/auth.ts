import { env } from "../env";
import { UserRepository } from "../repositories/user-repository";
import { getToday } from "../utils/get-today";

export class AuthService {
  constructor(private userRepository: UserRepository){}
  
  validatePassword(password: string) {
    const currentPassword = getToday().split("/").join("");
    return password === currentPassword;
  }

  createToken(password: string) {
    const token = `${env.DEFAULT_TOKEN}${password}`;
    
    return token;
  }

  validateToken(token: string, password: string) {
    const currentToken = this.createToken(password);
    return token === currentToken;
  }
}

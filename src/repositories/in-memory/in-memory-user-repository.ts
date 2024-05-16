import { env } from "../../env";
import { UserRepository } from "../user-repository";
import { getToday } from "../../utils/get-today";

export class InMemoryUserRepository implements UserRepository {
  public users:any[] = []
   create(password: string){
    const user = {
      password
    }

    this.users.push(user)

    return user
  }

  validateToken(token: string) {
    const currentPassword = getToday().split("/").join("");
    const currentToken = `${env.DEFAULT_TOKEN}${currentPassword}`;

    const doesTokenMatches = token === currentToken;
    return doesTokenMatches;
  }

  validatePassword(password: string) {
    const currentPassword = getToday().split("/").join("");

    return password === currentPassword;
  }
}

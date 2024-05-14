import { AuthService } from "../auth";
import { InMemoryUserRepository } from "../in-memory/in-memory-user-repository";

export const makeUserService = () =>{
    const inMemoryUserRepository = new InMemoryUserRepository();
    const authService = new AuthService(inMemoryUserRepository);

    return authService;
}
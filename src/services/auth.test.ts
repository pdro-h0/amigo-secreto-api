import { describe, it, expect, beforeEach } from "vitest";
import { InMemoryUserRepository } from "../repositories/in-memory/in-memory-user-repository";
import { AuthService } from "./auth";
import { getToday } from "../utils/get-today";

let inMemoryUserRepository: InMemoryUserRepository;
let authService: AuthService;

describe("AUTH SERVICE", () => {
  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository();
    authService = new AuthService(inMemoryUserRepository);
  });

  it("should be able to make password", () => {
    const { password } = inMemoryUserRepository.create(
      getToday().split("/").join("")
    );

    const valueOf = authService.validatePassword(password);

    expect(valueOf).toEqual(true);
  });

  it("should be able to authenticate", () => {
    const { password } = inMemoryUserRepository.create("15052024");

    const token = authService.createToken(password);

    const valueOf = authService.validateToken(token, password);

    expect(valueOf).toEqual(true);
  });
});

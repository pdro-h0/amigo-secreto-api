export interface UserRepository {
  validatePassword(password: string, token: string): boolean;
  validateToken(token: string): boolean;
}
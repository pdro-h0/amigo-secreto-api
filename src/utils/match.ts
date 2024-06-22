import { env } from "../env";

export const encryptMatch = (id: number) => {
  return `${env.DEFAULT_TOKEN}${id}${env.DEFAULT_TOKEN}`;
};

export const decryptMatch = (match: string) => {
  const stringId = match
    .replace(env.DEFAULT_TOKEN, "")
    .replace(env.DEFAULT_TOKEN, "");

  return stringId;
};

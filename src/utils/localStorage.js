import { TOKEN_NAME } from "../config/env";
export const setPosToken = (token) =>
  localStorage.setItem(TOKEN_NAME, token);
export const getPosToken = () => localStorage.getItem(TOKEN_NAME);
export const removePosToken = () => localStorage.removeItem(TOKEN_NAME);

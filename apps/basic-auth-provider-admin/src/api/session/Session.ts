import { OrigUser } from "../origUser/OrigUser";

export type Session = {
  expires: Date;
  id: string;
  sessionToken: string;
  user?: OrigUser | null;
};

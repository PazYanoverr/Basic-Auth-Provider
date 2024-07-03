import { OrigUser } from "../origUser/OrigUser";

export type Impersonation = {
  createdAt: Date;
  id: number;
  impersonatedBy?: OrigUser;
  impersonatedUser?: OrigUser;
};

import { AppModel } from "../appModel/AppModel";
import { OrigUser } from "../origUser/OrigUser";

export type ApiKey = {
  appField?: AppModel | null;
  createdAt: Date;
  expiresAt: Date | null;
  hashedKey: string;
  id: string;
  lastUsedAt: Date | null;
  note: string | null;
  user?: OrigUser | null;
};

import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";
import { OrigUserWhereUniqueInput } from "../origUser/OrigUserWhereUniqueInput";

export type ApiKeyCreateInput = {
  appField?: AppModelWhereUniqueInput | null;
  expiresAt?: Date | null;
  hashedKey: string;
  lastUsedAt?: Date | null;
  note?: string | null;
  user?: OrigUserWhereUniqueInput | null;
};

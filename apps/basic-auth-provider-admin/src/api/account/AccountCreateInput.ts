import { OrigUserWhereUniqueInput } from "../origUser/OrigUserWhereUniqueInput";

export type AccountCreateInput = {
  accessToken?: string | null;
  expiresAt?: number | null;
  idToken?: string | null;
  provider: string;
  providerAccountId: string;
  refreshToken?: string | null;
  scope?: string | null;
  sessionState?: string | null;
  tokenType?: string | null;
  typeField: string;
  user?: OrigUserWhereUniqueInput | null;
};
import { OrigUserWhereUniqueInput } from "../origUser/OrigUserWhereUniqueInput";

export type SessionCreateInput = {
  expires: Date;
  sessionToken: string;
  user?: OrigUserWhereUniqueInput | null;
};

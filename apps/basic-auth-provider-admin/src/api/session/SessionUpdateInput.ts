import { OrigUserWhereUniqueInput } from "../origUser/OrigUserWhereUniqueInput";

export type SessionUpdateInput = {
  expires?: Date;
  sessionToken?: string;
  user?: OrigUserWhereUniqueInput | null;
};

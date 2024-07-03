import { OrigUserWhereUniqueInput } from "../origUser/OrigUserWhereUniqueInput";

export type ImpersonationCreateInput = {
  impersonatedBy: OrigUserWhereUniqueInput;
  impersonatedUser: OrigUserWhereUniqueInput;
};

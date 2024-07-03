import { OrigUserWhereUniqueInput } from "../origUser/OrigUserWhereUniqueInput";

export type ImpersonationUpdateInput = {
  impersonatedBy?: OrigUserWhereUniqueInput;
  impersonatedUser?: OrigUserWhereUniqueInput;
};

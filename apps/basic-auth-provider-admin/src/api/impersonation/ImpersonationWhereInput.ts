import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { OrigUserWhereUniqueInput } from "../origUser/OrigUserWhereUniqueInput";

export type ImpersonationWhereInput = {
  createdAt?: DateTimeFilter;
  id?: IntFilter;
  impersonatedBy?: OrigUserWhereUniqueInput;
  impersonatedUser?: OrigUserWhereUniqueInput;
};

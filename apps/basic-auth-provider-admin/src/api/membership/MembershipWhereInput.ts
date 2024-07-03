import { BooleanFilter } from "../../util/BooleanFilter";
import { IntFilter } from "../../util/IntFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { OrigUserWhereUniqueInput } from "../origUser/OrigUserWhereUniqueInput";

export type MembershipWhereInput = {
  accepted?: BooleanFilter;
  id?: IntFilter;
  role?: "MEMBER" | "ADMIN" | "OWNER";
  team?: TeamWhereUniqueInput;
  user?: OrigUserWhereUniqueInput;
};

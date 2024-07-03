import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { OrigUserWhereUniqueInput } from "../origUser/OrigUserWhereUniqueInput";

export type MembershipCreateInput = {
  accepted: boolean;
  role: "MEMBER" | "ADMIN" | "OWNER";
  team: TeamWhereUniqueInput;
  user: OrigUserWhereUniqueInput;
};

import { Team } from "../team/Team";
import { OrigUser } from "../origUser/OrigUser";

export type Membership = {
  accepted: boolean;
  id: number;
  role?: "MEMBER" | "ADMIN" | "OWNER";
  team?: Team;
  user?: OrigUser;
};

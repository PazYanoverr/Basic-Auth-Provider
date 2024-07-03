import { OrigUser } from "../origUser/OrigUser";

export type SelectedCalendar = {
  externalId: string;
  id: number;
  integration: string;
  user?: OrigUser;
};

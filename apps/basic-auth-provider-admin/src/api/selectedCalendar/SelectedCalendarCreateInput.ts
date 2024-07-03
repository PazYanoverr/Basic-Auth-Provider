import { OrigUserWhereUniqueInput } from "../origUser/OrigUserWhereUniqueInput";

export type SelectedCalendarCreateInput = {
  externalId: string;
  integration: string;
  user: OrigUserWhereUniqueInput;
};

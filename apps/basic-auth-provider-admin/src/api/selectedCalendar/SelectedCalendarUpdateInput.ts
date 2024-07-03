import { OrigUserWhereUniqueInput } from "../origUser/OrigUserWhereUniqueInput";

export type SelectedCalendarUpdateInput = {
  externalId?: string;
  integration?: string;
  user?: OrigUserWhereUniqueInput;
};

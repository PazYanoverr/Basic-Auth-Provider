import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { OrigUserWhereUniqueInput } from "../origUser/OrigUserWhereUniqueInput";

export type SelectedCalendarWhereInput = {
  externalId?: StringFilter;
  id?: IntFilter;
  integration?: StringFilter;
  user?: OrigUserWhereUniqueInput;
};

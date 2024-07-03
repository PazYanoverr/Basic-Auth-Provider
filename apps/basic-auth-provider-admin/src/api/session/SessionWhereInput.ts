import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrigUserWhereUniqueInput } from "../origUser/OrigUserWhereUniqueInput";

export type SessionWhereInput = {
  expires?: DateTimeFilter;
  id?: StringFilter;
  sessionToken?: StringFilter;
  user?: OrigUserWhereUniqueInput;
};

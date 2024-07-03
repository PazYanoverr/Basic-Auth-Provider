import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrigUserWhereUniqueInput } from "../origUser/OrigUserWhereUniqueInput";

export type FeedbackWhereInput = {
  comment?: StringNullableFilter;
  date?: DateTimeFilter;
  id?: IntFilter;
  rating?: StringFilter;
  user?: OrigUserWhereUniqueInput;
};

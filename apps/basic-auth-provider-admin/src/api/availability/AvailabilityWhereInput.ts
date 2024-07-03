import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { ScheduleWhereUniqueInput } from "../schedule/ScheduleWhereUniqueInput";
import { OrigUserWhereUniqueInput } from "../origUser/OrigUserWhereUniqueInput";

export type AvailabilityWhereInput = {
  date?: DateTimeNullableFilter;
  days?: IntFilter;
  endTime?: DateTimeFilter;
  eventType?: EventTypeWhereUniqueInput;
  id?: IntFilter;
  schedule?: ScheduleWhereUniqueInput;
  startTime?: DateTimeFilter;
  user?: OrigUserWhereUniqueInput;
};

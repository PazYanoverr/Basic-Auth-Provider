import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { ScheduleWhereUniqueInput } from "../schedule/ScheduleWhereUniqueInput";
import { OrigUserWhereUniqueInput } from "../origUser/OrigUserWhereUniqueInput";

export type AvailabilityCreateInput = {
  date?: Date | null;
  days: number;
  endTime: Date;
  eventType?: EventTypeWhereUniqueInput | null;
  schedule?: ScheduleWhereUniqueInput | null;
  startTime: Date;
  user?: OrigUserWhereUniqueInput | null;
};

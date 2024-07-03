import { AvailabilityUpdateManyWithoutSchedulesInput } from "./AvailabilityUpdateManyWithoutSchedulesInput";
import { EventTypeUpdateManyWithoutSchedulesInput } from "./EventTypeUpdateManyWithoutSchedulesInput";
import { OrigUserWhereUniqueInput } from "../origUser/OrigUserWhereUniqueInput";

export type ScheduleUpdateInput = {
  availability?: AvailabilityUpdateManyWithoutSchedulesInput;
  eventType?: EventTypeUpdateManyWithoutSchedulesInput;
  name?: string;
  timeZone?: string | null;
  user?: OrigUserWhereUniqueInput;
};

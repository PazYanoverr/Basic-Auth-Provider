import { AvailabilityCreateNestedManyWithoutSchedulesInput } from "./AvailabilityCreateNestedManyWithoutSchedulesInput";
import { EventTypeCreateNestedManyWithoutSchedulesInput } from "./EventTypeCreateNestedManyWithoutSchedulesInput";
import { OrigUserWhereUniqueInput } from "../origUser/OrigUserWhereUniqueInput";

export type ScheduleCreateInput = {
  availability?: AvailabilityCreateNestedManyWithoutSchedulesInput;
  eventType?: EventTypeCreateNestedManyWithoutSchedulesInput;
  name: string;
  timeZone?: string | null;
  user: OrigUserWhereUniqueInput;
};

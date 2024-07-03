import { AvailabilityUpdateManyWithoutEventTypesInput } from "./AvailabilityUpdateManyWithoutEventTypesInput";
import { BookingUpdateManyWithoutEventTypesInput } from "./BookingUpdateManyWithoutEventTypesInput";
import { EventTypeCustomInputUpdateManyWithoutEventTypesInput } from "./EventTypeCustomInputUpdateManyWithoutEventTypesInput";
import { DestinationCalendarWhereUniqueInput } from "../destinationCalendar/DestinationCalendarWhereUniqueInput";
import { HashedLinkWhereUniqueInput } from "../hashedLink/HashedLinkWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { ScheduleWhereUniqueInput } from "../schedule/ScheduleWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { OrigUserUpdateManyWithoutEventTypesInput } from "./OrigUserUpdateManyWithoutEventTypesInput";
import { WebhookUpdateManyWithoutEventTypesInput } from "./WebhookUpdateManyWithoutEventTypesInput";
import { WorkflowsOnEventTypeUpdateManyWithoutEventTypesInput } from "./WorkflowsOnEventTypeUpdateManyWithoutEventTypesInput";

export type EventTypeUpdateInput = {
  afterEventBuffer?: number;
  availability?: AvailabilityUpdateManyWithoutEventTypesInput;
  beforeEventBuffer?: number;
  bookings?: BookingUpdateManyWithoutEventTypesInput;
  currency?: string;
  customInputs?: EventTypeCustomInputUpdateManyWithoutEventTypesInput;
  description?: string | null;
  destinationCalendar?: DestinationCalendarWhereUniqueInput | null;
  disableGuests?: boolean;
  eventName?: string | null;
  hashedLink?: HashedLinkWhereUniqueInput | null;
  hidden?: boolean;
  hideCalendarNotes?: boolean;
  length?: number;
  locations?: InputJsonValue;
  metadata?: InputJsonValue;
  minimumBookingNotice?: number;
  periodCountCalendarDays?: boolean | null;
  periodDays?: number | null;
  periodEndDate?: Date | null;
  periodStartDate?: Date | null;
  periodType?: "UNLIMITED" | "ROLLING" | "RANGE";
  position?: number;
  price?: number;
  recurringEvent?: InputJsonValue;
  requiresConfirmation?: boolean;
  schedule?: ScheduleWhereUniqueInput | null;
  schedulingType?: "ROUND_ROBIN" | "COLLECTIVE" | null;
  seatsPerTimeSlot?: number | null;
  slotInterval?: number | null;
  slug?: string;
  successRedirectUrl?: string | null;
  team?: TeamWhereUniqueInput | null;
  timeZone?: string | null;
  title?: string;
  userId?: number | null;
  users?: OrigUserUpdateManyWithoutEventTypesInput;
  webhooks?: WebhookUpdateManyWithoutEventTypesInput;
  workflows?: WorkflowsOnEventTypeUpdateManyWithoutEventTypesInput;
};

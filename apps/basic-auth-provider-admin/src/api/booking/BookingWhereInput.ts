import { AttendeeListRelationFilter } from "../attendee/AttendeeListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DailyEventReferenceWhereUniqueInput } from "../dailyEventReference/DailyEventReferenceWhereUniqueInput";
import { DestinationCalendarWhereUniqueInput } from "../destinationCalendar/DestinationCalendarWhereUniqueInput";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { BookingReferenceListRelationFilter } from "../bookingReference/BookingReferenceListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { OrigUserWhereUniqueInput } from "../origUser/OrigUserWhereUniqueInput";
import { WorkflowReminderListRelationFilter } from "../workflowReminder/WorkflowReminderListRelationFilter";

export type BookingWhereInput = {
  attendees?: AttendeeListRelationFilter;
  cancellationReason?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  customInputs?: JsonFilter;
  dailyRef?: DailyEventReferenceWhereUniqueInput;
  description?: StringNullableFilter;
  destinationCalendar?: DestinationCalendarWhereUniqueInput;
  dynamicEventSlugRef?: StringNullableFilter;
  dynamicGroupSlugRef?: StringNullableFilter;
  endTime?: DateTimeFilter;
  eventType?: EventTypeWhereUniqueInput;
  fromReschedule?: StringNullableFilter;
  id?: IntFilter;
  location?: StringNullableFilter;
  paid?: BooleanFilter;
  payment?: PaymentListRelationFilter;
  recurringEventId?: StringNullableFilter;
  references?: BookingReferenceListRelationFilter;
  rejectionReason?: StringNullableFilter;
  rescheduled?: BooleanNullableFilter;
  smsReminderNumber?: StringNullableFilter;
  startTime?: DateTimeFilter;
  status?: "CANCELLED" | "ACCEPTED" | "REJECTED" | "PENDING";
  title?: StringFilter;
  uid?: StringFilter;
  updatedAt?: DateTimeNullableFilter;
  user?: OrigUserWhereUniqueInput;
  workflowReminders?: WorkflowReminderListRelationFilter;
};

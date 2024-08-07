import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ApiKeyListRelationFilter } from "../apiKey/ApiKeyListRelationFilter";
import { AvailabilityListRelationFilter } from "../availability/AvailabilityListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CredentialListRelationFilter } from "../credential/CredentialListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DestinationCalendarWhereUniqueInput } from "../destinationCalendar/DestinationCalendarWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EventTypeListRelationFilter } from "../eventType/EventTypeListRelationFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { ImpersonationListRelationFilter } from "../impersonation/ImpersonationListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ScheduleListRelationFilter } from "../schedule/ScheduleListRelationFilter";
import { SelectedCalendarListRelationFilter } from "../selectedCalendar/SelectedCalendarListRelationFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";
import { MembershipListRelationFilter } from "../membership/MembershipListRelationFilter";
import { WebhookListRelationFilter } from "../webhook/WebhookListRelationFilter";
import { WorkflowListRelationFilter } from "../workflow/WorkflowListRelationFilter";

export type OrigUserWhereInput = {
  accounts?: AccountListRelationFilter;
  allowDynamicBooking?: BooleanNullableFilter;
  apiKeys?: ApiKeyListRelationFilter;
  availability?: AvailabilityListRelationFilter;
  avatar?: StringNullableFilter;
  away?: BooleanFilter;
  bio?: StringNullableFilter;
  bookings?: BookingListRelationFilter;
  brandColor?: StringFilter;
  bufferTime?: IntFilter;
  completedOnboarding?: BooleanFilter;
  createdDate?: DateTimeFilter;
  credentials?: CredentialListRelationFilter;
  darkBrandColor?: StringFilter;
  defaultScheduleId?: IntNullableFilter;
  destinationCalendar?: DestinationCalendarWhereUniqueInput;
  disableImpersonation?: BooleanFilter;
  email?: StringFilter;
  emailVerified?: DateTimeNullableFilter;
  endTime?: IntFilter;
  eventTypes?: EventTypeListRelationFilter;
  feedback?: FeedbackListRelationFilter;
  hideBranding?: BooleanFilter;
  id?: IntFilter;
  identityProvider?: "CAL" | "GOOGLE" | "SAML";
  identityProviderId?: StringNullableFilter;
  impersonatedBy?: ImpersonationListRelationFilter;
  impersonatedUsers?: ImpersonationListRelationFilter;
  invitedTo?: IntNullableFilter;
  locale?: StringNullableFilter;
  metadata?: JsonFilter;
  name?: StringNullableFilter;
  password?: StringNullableFilter;
  plan?: "FREE" | "TRIAL" | "PRO";
  role?: "USER" | "ADMIN";
  schedules?: ScheduleListRelationFilter;
  selectedCalendars?: SelectedCalendarListRelationFilter;
  sessions?: SessionListRelationFilter;
  startTime?: IntFilter;
  teams?: MembershipListRelationFilter;
  theme?: StringNullableFilter;
  timeFormat?: IntNullableFilter;
  timeZone?: StringFilter;
  trialEndsAt?: DateTimeNullableFilter;
  twoFactorEnabled?: BooleanFilter;
  twoFactorSecret?: StringNullableFilter;
  username?: StringNullableFilter;
  verified?: BooleanNullableFilter;
  webhooks?: WebhookListRelationFilter;
  weekStart?: StringFilter;
  workflows?: WorkflowListRelationFilter;
};

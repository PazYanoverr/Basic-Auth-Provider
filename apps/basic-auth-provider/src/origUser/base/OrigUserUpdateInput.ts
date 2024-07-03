/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccountUpdateManyWithoutOrigUsersInput } from "./AccountUpdateManyWithoutOrigUsersInput";

import {
  ValidateNested,
  IsOptional,
  IsBoolean,
  IsString,
  MaxLength,
  IsInt,
  Max,
  IsDate,
  IsEnum,
} from "class-validator";

import { Type } from "class-transformer";
import { ApiKeyUpdateManyWithoutOrigUsersInput } from "./ApiKeyUpdateManyWithoutOrigUsersInput";
import { AvailabilityUpdateManyWithoutOrigUsersInput } from "./AvailabilityUpdateManyWithoutOrigUsersInput";
import { BookingUpdateManyWithoutOrigUsersInput } from "./BookingUpdateManyWithoutOrigUsersInput";
import { CredentialUpdateManyWithoutOrigUsersInput } from "./CredentialUpdateManyWithoutOrigUsersInput";
import { DestinationCalendarWhereUniqueInput } from "../../destinationCalendar/base/DestinationCalendarWhereUniqueInput";
import { EventTypeUpdateManyWithoutOrigUsersInput } from "./EventTypeUpdateManyWithoutOrigUsersInput";
import { FeedbackUpdateManyWithoutOrigUsersInput } from "./FeedbackUpdateManyWithoutOrigUsersInput";
import { EnumOrigUserIdentityProvider } from "./EnumOrigUserIdentityProvider";
import { ImpersonationUpdateManyWithoutOrigUsersInput } from "./ImpersonationUpdateManyWithoutOrigUsersInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumOrigUserPlan } from "./EnumOrigUserPlan";
import { EnumOrigUserRole } from "./EnumOrigUserRole";
import { ScheduleUpdateManyWithoutOrigUsersInput } from "./ScheduleUpdateManyWithoutOrigUsersInput";
import { SelectedCalendarUpdateManyWithoutOrigUsersInput } from "./SelectedCalendarUpdateManyWithoutOrigUsersInput";
import { SessionUpdateManyWithoutOrigUsersInput } from "./SessionUpdateManyWithoutOrigUsersInput";
import { MembershipUpdateManyWithoutOrigUsersInput } from "./MembershipUpdateManyWithoutOrigUsersInput";
import { WebhookUpdateManyWithoutOrigUsersInput } from "./WebhookUpdateManyWithoutOrigUsersInput";
import { WorkflowUpdateManyWithoutOrigUsersInput } from "./WorkflowUpdateManyWithoutOrigUsersInput";

@InputType()
class OrigUserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AccountUpdateManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => AccountUpdateManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => AccountUpdateManyWithoutOrigUsersInput, {
    nullable: true,
  })
  accounts?: AccountUpdateManyWithoutOrigUsersInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  allowDynamicBooking?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => ApiKeyUpdateManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => ApiKeyUpdateManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => ApiKeyUpdateManyWithoutOrigUsersInput, {
    nullable: true,
  })
  apiKeys?: ApiKeyUpdateManyWithoutOrigUsersInput;

  @ApiProperty({
    required: false,
    type: () => AvailabilityUpdateManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => AvailabilityUpdateManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => AvailabilityUpdateManyWithoutOrigUsersInput, {
    nullable: true,
  })
  availability?: AvailabilityUpdateManyWithoutOrigUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  avatar?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  away?: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  bio?: string | null;

  @ApiProperty({
    required: false,
    type: () => BookingUpdateManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => BookingUpdateManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => BookingUpdateManyWithoutOrigUsersInput, {
    nullable: true,
  })
  bookings?: BookingUpdateManyWithoutOrigUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  brandColor?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  bufferTime?: number;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  completedOnboarding?: boolean;

  @ApiProperty({
    required: false,
    type: () => CredentialUpdateManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => CredentialUpdateManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => CredentialUpdateManyWithoutOrigUsersInput, {
    nullable: true,
  })
  credentials?: CredentialUpdateManyWithoutOrigUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  darkBrandColor?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  defaultScheduleId?: number | null;

  @ApiProperty({
    required: false,
    type: () => DestinationCalendarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DestinationCalendarWhereUniqueInput)
  @IsOptional()
  @Field(() => DestinationCalendarWhereUniqueInput, {
    nullable: true,
  })
  destinationCalendar?: DestinationCalendarWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  disableImpersonation?: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  emailVerified?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  endTime?: number;

  @ApiProperty({
    required: false,
    type: () => EventTypeUpdateManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => EventTypeUpdateManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => EventTypeUpdateManyWithoutOrigUsersInput, {
    nullable: true,
  })
  eventTypes?: EventTypeUpdateManyWithoutOrigUsersInput;

  @ApiProperty({
    required: false,
    type: () => FeedbackUpdateManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => FeedbackUpdateManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => FeedbackUpdateManyWithoutOrigUsersInput, {
    nullable: true,
  })
  feedback?: FeedbackUpdateManyWithoutOrigUsersInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  hideBranding?: boolean;

  @ApiProperty({
    required: false,
    enum: EnumOrigUserIdentityProvider,
  })
  @IsEnum(EnumOrigUserIdentityProvider)
  @IsOptional()
  @Field(() => EnumOrigUserIdentityProvider, {
    nullable: true,
  })
  identityProvider?: "CAL" | "GOOGLE" | "SAML";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  identityProviderId?: string | null;

  @ApiProperty({
    required: false,
    type: () => ImpersonationUpdateManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => ImpersonationUpdateManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => ImpersonationUpdateManyWithoutOrigUsersInput, {
    nullable: true,
  })
  impersonatedBy?: ImpersonationUpdateManyWithoutOrigUsersInput;

  @ApiProperty({
    required: false,
    type: () => ImpersonationUpdateManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => ImpersonationUpdateManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => ImpersonationUpdateManyWithoutOrigUsersInput, {
    nullable: true,
  })
  impersonatedUsers?: ImpersonationUpdateManyWithoutOrigUsersInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  invitedTo?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  locale?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  metadata?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumOrigUserPlan,
  })
  @IsEnum(EnumOrigUserPlan)
  @IsOptional()
  @Field(() => EnumOrigUserPlan, {
    nullable: true,
  })
  plan?: "FREE" | "TRIAL" | "PRO";

  @ApiProperty({
    required: false,
    enum: EnumOrigUserRole,
  })
  @IsEnum(EnumOrigUserRole)
  @IsOptional()
  @Field(() => EnumOrigUserRole, {
    nullable: true,
  })
  role?: "USER" | "ADMIN";

  @ApiProperty({
    required: false,
    type: () => ScheduleUpdateManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => ScheduleUpdateManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => ScheduleUpdateManyWithoutOrigUsersInput, {
    nullable: true,
  })
  schedules?: ScheduleUpdateManyWithoutOrigUsersInput;

  @ApiProperty({
    required: false,
    type: () => SelectedCalendarUpdateManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => SelectedCalendarUpdateManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => SelectedCalendarUpdateManyWithoutOrigUsersInput, {
    nullable: true,
  })
  selectedCalendars?: SelectedCalendarUpdateManyWithoutOrigUsersInput;

  @ApiProperty({
    required: false,
    type: () => SessionUpdateManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => SessionUpdateManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => SessionUpdateManyWithoutOrigUsersInput, {
    nullable: true,
  })
  sessions?: SessionUpdateManyWithoutOrigUsersInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  startTime?: number;

  @ApiProperty({
    required: false,
    type: () => MembershipUpdateManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => MembershipUpdateManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => MembershipUpdateManyWithoutOrigUsersInput, {
    nullable: true,
  })
  teams?: MembershipUpdateManyWithoutOrigUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  theme?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  timeFormat?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  timeZone?: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  trialEndsAt?: Date | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  twoFactorEnabled?: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  twoFactorSecret?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  verified?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => WebhookUpdateManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => WebhookUpdateManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => WebhookUpdateManyWithoutOrigUsersInput, {
    nullable: true,
  })
  webhooks?: WebhookUpdateManyWithoutOrigUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  weekStart?: string;

  @ApiProperty({
    required: false,
    type: () => WorkflowUpdateManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => WorkflowUpdateManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => WorkflowUpdateManyWithoutOrigUsersInput, {
    nullable: true,
  })
  workflows?: WorkflowUpdateManyWithoutOrigUsersInput;
}

export { OrigUserUpdateInput as OrigUserUpdateInput };
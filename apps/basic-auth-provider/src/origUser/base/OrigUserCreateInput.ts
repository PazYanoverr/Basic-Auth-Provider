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
import { AccountCreateNestedManyWithoutOrigUsersInput } from "./AccountCreateNestedManyWithoutOrigUsersInput";

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
import { ApiKeyCreateNestedManyWithoutOrigUsersInput } from "./ApiKeyCreateNestedManyWithoutOrigUsersInput";
import { AvailabilityCreateNestedManyWithoutOrigUsersInput } from "./AvailabilityCreateNestedManyWithoutOrigUsersInput";
import { BookingCreateNestedManyWithoutOrigUsersInput } from "./BookingCreateNestedManyWithoutOrigUsersInput";
import { CredentialCreateNestedManyWithoutOrigUsersInput } from "./CredentialCreateNestedManyWithoutOrigUsersInput";
import { DestinationCalendarWhereUniqueInput } from "../../destinationCalendar/base/DestinationCalendarWhereUniqueInput";
import { EventTypeCreateNestedManyWithoutOrigUsersInput } from "./EventTypeCreateNestedManyWithoutOrigUsersInput";
import { FeedbackCreateNestedManyWithoutOrigUsersInput } from "./FeedbackCreateNestedManyWithoutOrigUsersInput";
import { EnumOrigUserIdentityProvider } from "./EnumOrigUserIdentityProvider";
import { ImpersonationCreateNestedManyWithoutOrigUsersInput } from "./ImpersonationCreateNestedManyWithoutOrigUsersInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumOrigUserPlan } from "./EnumOrigUserPlan";
import { EnumOrigUserRole } from "./EnumOrigUserRole";
import { ScheduleCreateNestedManyWithoutOrigUsersInput } from "./ScheduleCreateNestedManyWithoutOrigUsersInput";
import { SelectedCalendarCreateNestedManyWithoutOrigUsersInput } from "./SelectedCalendarCreateNestedManyWithoutOrigUsersInput";
import { SessionCreateNestedManyWithoutOrigUsersInput } from "./SessionCreateNestedManyWithoutOrigUsersInput";
import { MembershipCreateNestedManyWithoutOrigUsersInput } from "./MembershipCreateNestedManyWithoutOrigUsersInput";
import { WebhookCreateNestedManyWithoutOrigUsersInput } from "./WebhookCreateNestedManyWithoutOrigUsersInput";
import { WorkflowCreateNestedManyWithoutOrigUsersInput } from "./WorkflowCreateNestedManyWithoutOrigUsersInput";

@InputType()
class OrigUserCreateInput {
  @ApiProperty({
    required: false,
    type: () => AccountCreateNestedManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => AccountCreateNestedManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => AccountCreateNestedManyWithoutOrigUsersInput, {
    nullable: true,
  })
  accounts?: AccountCreateNestedManyWithoutOrigUsersInput;

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
    type: () => ApiKeyCreateNestedManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => ApiKeyCreateNestedManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => ApiKeyCreateNestedManyWithoutOrigUsersInput, {
    nullable: true,
  })
  apiKeys?: ApiKeyCreateNestedManyWithoutOrigUsersInput;

  @ApiProperty({
    required: false,
    type: () => AvailabilityCreateNestedManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => AvailabilityCreateNestedManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => AvailabilityCreateNestedManyWithoutOrigUsersInput, {
    nullable: true,
  })
  availability?: AvailabilityCreateNestedManyWithoutOrigUsersInput;

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
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  away!: boolean;

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
    type: () => BookingCreateNestedManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => BookingCreateNestedManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => BookingCreateNestedManyWithoutOrigUsersInput, {
    nullable: true,
  })
  bookings?: BookingCreateNestedManyWithoutOrigUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  brandColor!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  bufferTime!: number;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  completedOnboarding!: boolean;

  @ApiProperty({
    required: false,
    type: () => CredentialCreateNestedManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => CredentialCreateNestedManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => CredentialCreateNestedManyWithoutOrigUsersInput, {
    nullable: true,
  })
  credentials?: CredentialCreateNestedManyWithoutOrigUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  darkBrandColor!: string;

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
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  disableImpersonation!: boolean;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  email!: string;

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
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  endTime!: number;

  @ApiProperty({
    required: false,
    type: () => EventTypeCreateNestedManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => EventTypeCreateNestedManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => EventTypeCreateNestedManyWithoutOrigUsersInput, {
    nullable: true,
  })
  eventTypes?: EventTypeCreateNestedManyWithoutOrigUsersInput;

  @ApiProperty({
    required: false,
    type: () => FeedbackCreateNestedManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => FeedbackCreateNestedManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => FeedbackCreateNestedManyWithoutOrigUsersInput, {
    nullable: true,
  })
  feedback?: FeedbackCreateNestedManyWithoutOrigUsersInput;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  hideBranding!: boolean;

  @ApiProperty({
    required: true,
    enum: EnumOrigUserIdentityProvider,
  })
  @IsEnum(EnumOrigUserIdentityProvider)
  @Field(() => EnumOrigUserIdentityProvider)
  identityProvider!: "CAL" | "GOOGLE" | "SAML";

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
    type: () => ImpersonationCreateNestedManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => ImpersonationCreateNestedManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => ImpersonationCreateNestedManyWithoutOrigUsersInput, {
    nullable: true,
  })
  impersonatedBy?: ImpersonationCreateNestedManyWithoutOrigUsersInput;

  @ApiProperty({
    required: false,
    type: () => ImpersonationCreateNestedManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => ImpersonationCreateNestedManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => ImpersonationCreateNestedManyWithoutOrigUsersInput, {
    nullable: true,
  })
  impersonatedUsers?: ImpersonationCreateNestedManyWithoutOrigUsersInput;

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
    required: true,
    enum: EnumOrigUserPlan,
  })
  @IsEnum(EnumOrigUserPlan)
  @Field(() => EnumOrigUserPlan)
  plan!: "FREE" | "TRIAL" | "PRO";

  @ApiProperty({
    required: true,
    enum: EnumOrigUserRole,
  })
  @IsEnum(EnumOrigUserRole)
  @Field(() => EnumOrigUserRole)
  role!: "USER" | "ADMIN";

  @ApiProperty({
    required: false,
    type: () => ScheduleCreateNestedManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => ScheduleCreateNestedManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => ScheduleCreateNestedManyWithoutOrigUsersInput, {
    nullable: true,
  })
  schedules?: ScheduleCreateNestedManyWithoutOrigUsersInput;

  @ApiProperty({
    required: false,
    type: () => SelectedCalendarCreateNestedManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => SelectedCalendarCreateNestedManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => SelectedCalendarCreateNestedManyWithoutOrigUsersInput, {
    nullable: true,
  })
  selectedCalendars?: SelectedCalendarCreateNestedManyWithoutOrigUsersInput;

  @ApiProperty({
    required: false,
    type: () => SessionCreateNestedManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => SessionCreateNestedManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => SessionCreateNestedManyWithoutOrigUsersInput, {
    nullable: true,
  })
  sessions?: SessionCreateNestedManyWithoutOrigUsersInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  startTime!: number;

  @ApiProperty({
    required: false,
    type: () => MembershipCreateNestedManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => MembershipCreateNestedManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => MembershipCreateNestedManyWithoutOrigUsersInput, {
    nullable: true,
  })
  teams?: MembershipCreateNestedManyWithoutOrigUsersInput;

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
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  timeZone!: string;

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
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  twoFactorEnabled!: boolean;

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
    type: () => WebhookCreateNestedManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => WebhookCreateNestedManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => WebhookCreateNestedManyWithoutOrigUsersInput, {
    nullable: true,
  })
  webhooks?: WebhookCreateNestedManyWithoutOrigUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  weekStart!: string;

  @ApiProperty({
    required: false,
    type: () => WorkflowCreateNestedManyWithoutOrigUsersInput,
  })
  @ValidateNested()
  @Type(() => WorkflowCreateNestedManyWithoutOrigUsersInput)
  @IsOptional()
  @Field(() => WorkflowCreateNestedManyWithoutOrigUsersInput, {
    nullable: true,
  })
  workflows?: WorkflowCreateNestedManyWithoutOrigUsersInput;
}

export { OrigUserCreateInput as OrigUserCreateInput };
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

import {
  IsInt,
  Max,
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsBoolean,
  IsDate,
  IsEnum,
} from "class-validator";

import { AvailabilityCreateNestedManyWithoutEventTypesInput } from "./AvailabilityCreateNestedManyWithoutEventTypesInput";
import { Type } from "class-transformer";
import { BookingCreateNestedManyWithoutEventTypesInput } from "./BookingCreateNestedManyWithoutEventTypesInput";
import { EventTypeCustomInputCreateNestedManyWithoutEventTypesInput } from "./EventTypeCustomInputCreateNestedManyWithoutEventTypesInput";
import { DestinationCalendarWhereUniqueInput } from "../../destinationCalendar/base/DestinationCalendarWhereUniqueInput";
import { HashedLinkWhereUniqueInput } from "../../hashedLink/base/HashedLinkWhereUniqueInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumEventTypePeriodType } from "./EnumEventTypePeriodType";
import { ScheduleWhereUniqueInput } from "../../schedule/base/ScheduleWhereUniqueInput";
import { EnumEventTypeSchedulingType } from "./EnumEventTypeSchedulingType";
import { TeamWhereUniqueInput } from "../../team/base/TeamWhereUniqueInput";
import { OrigUserCreateNestedManyWithoutEventTypesInput } from "./OrigUserCreateNestedManyWithoutEventTypesInput";
import { WebhookCreateNestedManyWithoutEventTypesInput } from "./WebhookCreateNestedManyWithoutEventTypesInput";
import { WorkflowsOnEventTypeCreateNestedManyWithoutEventTypesInput } from "./WorkflowsOnEventTypeCreateNestedManyWithoutEventTypesInput";

@InputType()
class EventTypeCreateInput {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  afterEventBuffer!: number;

  @ApiProperty({
    required: false,
    type: () => AvailabilityCreateNestedManyWithoutEventTypesInput,
  })
  @ValidateNested()
  @Type(() => AvailabilityCreateNestedManyWithoutEventTypesInput)
  @IsOptional()
  @Field(() => AvailabilityCreateNestedManyWithoutEventTypesInput, {
    nullable: true,
  })
  availability?: AvailabilityCreateNestedManyWithoutEventTypesInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  beforeEventBuffer!: number;

  @ApiProperty({
    required: false,
    type: () => BookingCreateNestedManyWithoutEventTypesInput,
  })
  @ValidateNested()
  @Type(() => BookingCreateNestedManyWithoutEventTypesInput)
  @IsOptional()
  @Field(() => BookingCreateNestedManyWithoutEventTypesInput, {
    nullable: true,
  })
  bookings?: BookingCreateNestedManyWithoutEventTypesInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  currency!: string;

  @ApiProperty({
    required: false,
    type: () => EventTypeCustomInputCreateNestedManyWithoutEventTypesInput,
  })
  @ValidateNested()
  @Type(() => EventTypeCustomInputCreateNestedManyWithoutEventTypesInput)
  @IsOptional()
  @Field(() => EventTypeCustomInputCreateNestedManyWithoutEventTypesInput, {
    nullable: true,
  })
  customInputs?: EventTypeCustomInputCreateNestedManyWithoutEventTypesInput;

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
  description?: string | null;

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
  disableGuests!: boolean;

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
  eventName?: string | null;

  @ApiProperty({
    required: false,
    type: () => HashedLinkWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HashedLinkWhereUniqueInput)
  @IsOptional()
  @Field(() => HashedLinkWhereUniqueInput, {
    nullable: true,
  })
  hashedLink?: HashedLinkWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  hidden!: boolean;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  hideCalendarNotes!: boolean;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  length!: number;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  locations?: InputJsonValue;

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
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  minimumBookingNotice!: number;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  periodCountCalendarDays?: boolean | null;

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
  periodDays?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  periodEndDate?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  periodStartDate?: Date | null;

  @ApiProperty({
    required: true,
    enum: EnumEventTypePeriodType,
  })
  @IsEnum(EnumEventTypePeriodType)
  @Field(() => EnumEventTypePeriodType)
  periodType!: "UNLIMITED" | "ROLLING" | "RANGE";

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  position!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  price!: number;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  recurringEvent?: InputJsonValue;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  requiresConfirmation!: boolean;

  @ApiProperty({
    required: false,
    type: () => ScheduleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ScheduleWhereUniqueInput)
  @IsOptional()
  @Field(() => ScheduleWhereUniqueInput, {
    nullable: true,
  })
  schedule?: ScheduleWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumEventTypeSchedulingType,
  })
  @IsEnum(EnumEventTypeSchedulingType)
  @IsOptional()
  @Field(() => EnumEventTypeSchedulingType, {
    nullable: true,
  })
  schedulingType?: "ROUND_ROBIN" | "COLLECTIVE" | null;

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
  seatsPerTimeSlot?: number | null;

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
  slotInterval?: number | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  slug!: string;

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
  successRedirectUrl?: string | null;

  @ApiProperty({
    required: false,
    type: () => TeamWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TeamWhereUniqueInput)
  @IsOptional()
  @Field(() => TeamWhereUniqueInput, {
    nullable: true,
  })
  team?: TeamWhereUniqueInput | null;

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
  timeZone?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  title!: string;

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
  userId?: number | null;

  @ApiProperty({
    required: true,
    type: () => OrigUserCreateNestedManyWithoutEventTypesInput,
  })
  @ValidateNested()
  @Type(() => OrigUserCreateNestedManyWithoutEventTypesInput)
  @IsOptional()
  @Field(() => OrigUserCreateNestedManyWithoutEventTypesInput, {
    nullable: true,
  })
  users?: OrigUserCreateNestedManyWithoutEventTypesInput;

  @ApiProperty({
    required: false,
    type: () => WebhookCreateNestedManyWithoutEventTypesInput,
  })
  @ValidateNested()
  @Type(() => WebhookCreateNestedManyWithoutEventTypesInput)
  @IsOptional()
  @Field(() => WebhookCreateNestedManyWithoutEventTypesInput, {
    nullable: true,
  })
  webhooks?: WebhookCreateNestedManyWithoutEventTypesInput;

  @ApiProperty({
    required: false,
    type: () => WorkflowsOnEventTypeCreateNestedManyWithoutEventTypesInput,
  })
  @ValidateNested()
  @Type(() => WorkflowsOnEventTypeCreateNestedManyWithoutEventTypesInput)
  @IsOptional()
  @Field(() => WorkflowsOnEventTypeCreateNestedManyWithoutEventTypesInput, {
    nullable: true,
  })
  workflows?: WorkflowsOnEventTypeCreateNestedManyWithoutEventTypesInput;
}

export { EventTypeCreateInput as EventTypeCreateInput };

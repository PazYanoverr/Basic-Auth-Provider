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
import { IsInt, Max, IsOptional, IsEnum } from "class-validator";
import { EnumReminderMailReminderType } from "./EnumReminderMailReminderType";

@InputType()
class ReminderMailUpdateInput {
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
  elapsedMinutes?: number;

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
  referenceId?: number;

  @ApiProperty({
    required: false,
    enum: EnumReminderMailReminderType,
  })
  @IsEnum(EnumReminderMailReminderType)
  @IsOptional()
  @Field(() => EnumReminderMailReminderType, {
    nullable: true,
  })
  reminderType?: "PENDING_BOOKING_CONFIRMATION";
}

export { ReminderMailUpdateInput as ReminderMailUpdateInput };

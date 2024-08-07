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
import { EventTypeWhereUniqueInput } from "../../eventType/base/EventTypeWhereUniqueInput";
import {
  ValidateNested,
  IsString,
  MaxLength,
  IsBoolean,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumEventTypeCustomInputType } from "./EnumEventTypeCustomInputType";

@InputType()
class EventTypeCustomInputCreateInput {
  @ApiProperty({
    required: true,
    type: () => EventTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EventTypeWhereUniqueInput)
  @Field(() => EventTypeWhereUniqueInput)
  eventType!: EventTypeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  label!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  placeholder!: string;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  required!: boolean;

  @ApiProperty({
    required: true,
    enum: EnumEventTypeCustomInputType,
  })
  @IsEnum(EnumEventTypeCustomInputType)
  @Field(() => EnumEventTypeCustomInputType)
  type!: "TEXT" | "TEXTLONG" | "NUMBER" | "BOOL";
}

export { EventTypeCustomInputCreateInput as EventTypeCustomInputCreateInput };

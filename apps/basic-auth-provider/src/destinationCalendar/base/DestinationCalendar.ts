/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Booking } from "../../booking/base/Booking";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { Credential } from "../../credential/base/Credential";
import { EventType } from "../../eventType/base/EventType";
import { OrigUser } from "../../origUser/base/OrigUser";

@ObjectType()
class DestinationCalendar {
  @ApiProperty({
    required: false,
    type: () => Booking,
  })
  @ValidateNested()
  @Type(() => Booking)
  @IsOptional()
  booking?: Booking | null;

  @ApiProperty({
    required: false,
    type: () => Credential,
  })
  @ValidateNested()
  @Type(() => Credential)
  @IsOptional()
  credential?: Credential | null;

  @ApiProperty({
    required: false,
    type: () => EventType,
  })
  @ValidateNested()
  @Type(() => EventType)
  @IsOptional()
  eventType?: EventType | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  externalId!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  integration!: string;

  @ApiProperty({
    required: false,
    type: () => OrigUser,
  })
  @ValidateNested()
  @Type(() => OrigUser)
  @IsOptional()
  user?: OrigUser | null;
}

export { DestinationCalendar as DestinationCalendar };

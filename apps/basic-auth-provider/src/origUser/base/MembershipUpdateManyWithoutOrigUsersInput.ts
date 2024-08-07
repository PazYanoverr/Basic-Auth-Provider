/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MembershipWhereUniqueInput } from "../../membership/base/MembershipWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MembershipUpdateManyWithoutOrigUsersInput {
  @Field(() => [MembershipWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MembershipWhereUniqueInput],
  })
  connect?: Array<MembershipWhereUniqueInput>;

  @Field(() => [MembershipWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MembershipWhereUniqueInput],
  })
  disconnect?: Array<MembershipWhereUniqueInput>;

  @Field(() => [MembershipWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MembershipWhereUniqueInput],
  })
  set?: Array<MembershipWhereUniqueInput>;
}

export { MembershipUpdateManyWithoutOrigUsersInput as MembershipUpdateManyWithoutOrigUsersInput };

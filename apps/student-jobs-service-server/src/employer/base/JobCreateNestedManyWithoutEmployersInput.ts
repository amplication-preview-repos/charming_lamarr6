/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { JobWhereUniqueInput } from "../../job/base/JobWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class JobCreateNestedManyWithoutEmployersInput {
  @Field(() => [JobWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [JobWhereUniqueInput],
  })
  connect?: Array<JobWhereUniqueInput>;
}

export { JobCreateNestedManyWithoutEmployersInput as JobCreateNestedManyWithoutEmployersInput };

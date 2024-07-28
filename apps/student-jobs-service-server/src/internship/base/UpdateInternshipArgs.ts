/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InternshipWhereUniqueInput } from "./InternshipWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { InternshipUpdateInput } from "./InternshipUpdateInput";

@ArgsType()
class UpdateInternshipArgs {
  @ApiProperty({
    required: true,
    type: () => InternshipWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InternshipWhereUniqueInput)
  @Field(() => InternshipWhereUniqueInput, { nullable: false })
  where!: InternshipWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => InternshipUpdateInput,
  })
  @ValidateNested()
  @Type(() => InternshipUpdateInput)
  @Field(() => InternshipUpdateInput, { nullable: false })
  data!: InternshipUpdateInput;
}

export { UpdateInternshipArgs as UpdateInternshipArgs };

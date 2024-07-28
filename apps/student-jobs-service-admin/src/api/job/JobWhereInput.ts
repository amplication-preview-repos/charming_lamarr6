import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EmployerWhereUniqueInput } from "../employer/EmployerWhereUniqueInput";
import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";

export type JobWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  location?: StringNullableFilter;
  salary?: FloatNullableFilter;
  postedDate?: DateTimeNullableFilter;
  employer?: EmployerWhereUniqueInput;
  applications?: ApplicationListRelationFilter;
};

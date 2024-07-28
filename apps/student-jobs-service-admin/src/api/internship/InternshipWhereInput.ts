import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { EmployerWhereUniqueInput } from "../employer/EmployerWhereUniqueInput";

export type InternshipWhereInput = {
  id?: StringFilter;
  location?: StringNullableFilter;
  duration?: StringNullableFilter;
  stipend?: FloatNullableFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  employer?: EmployerWhereUniqueInput;
};

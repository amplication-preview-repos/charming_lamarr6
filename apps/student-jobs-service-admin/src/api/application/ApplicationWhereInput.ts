import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApplicationWhereInput = {
  id?: StringFilter;
  submissionDate?: DateTimeNullableFilter;
  status?: "Option1";
  job?: JobWhereUniqueInput;
  user?: UserWhereUniqueInput;
};

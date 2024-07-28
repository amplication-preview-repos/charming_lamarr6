import { EmployerWhereUniqueInput } from "../employer/EmployerWhereUniqueInput";
import { ApplicationCreateNestedManyWithoutJobsInput } from "./ApplicationCreateNestedManyWithoutJobsInput";

export type JobCreateInput = {
  title?: string | null;
  description?: string | null;
  location?: string | null;
  salary?: number | null;
  postedDate?: Date | null;
  employer?: EmployerWhereUniqueInput | null;
  applications?: ApplicationCreateNestedManyWithoutJobsInput;
};

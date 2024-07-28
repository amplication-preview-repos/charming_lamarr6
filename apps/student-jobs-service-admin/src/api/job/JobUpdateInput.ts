import { EmployerWhereUniqueInput } from "../employer/EmployerWhereUniqueInput";
import { ApplicationUpdateManyWithoutJobsInput } from "./ApplicationUpdateManyWithoutJobsInput";

export type JobUpdateInput = {
  title?: string | null;
  description?: string | null;
  location?: string | null;
  salary?: number | null;
  postedDate?: Date | null;
  employer?: EmployerWhereUniqueInput | null;
  applications?: ApplicationUpdateManyWithoutJobsInput;
};

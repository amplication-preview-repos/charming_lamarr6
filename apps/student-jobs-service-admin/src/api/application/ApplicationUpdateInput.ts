import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApplicationUpdateInput = {
  submissionDate?: Date | null;
  status?: "Option1" | null;
  job?: JobWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};

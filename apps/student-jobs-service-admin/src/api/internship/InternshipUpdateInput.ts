import { EmployerWhereUniqueInput } from "../employer/EmployerWhereUniqueInput";

export type InternshipUpdateInput = {
  location?: string | null;
  duration?: string | null;
  stipend?: number | null;
  title?: string | null;
  description?: string | null;
  employer?: EmployerWhereUniqueInput | null;
};

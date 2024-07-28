import { EmployerWhereUniqueInput } from "../employer/EmployerWhereUniqueInput";

export type InternshipCreateInput = {
  location?: string | null;
  duration?: string | null;
  stipend?: number | null;
  title?: string | null;
  description?: string | null;
  employer?: EmployerWhereUniqueInput | null;
};

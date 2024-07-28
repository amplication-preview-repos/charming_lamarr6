import { JobCreateNestedManyWithoutEmployersInput } from "./JobCreateNestedManyWithoutEmployersInput";
import { InternshipCreateNestedManyWithoutEmployersInput } from "./InternshipCreateNestedManyWithoutEmployersInput";

export type EmployerCreateInput = {
  jobs?: JobCreateNestedManyWithoutEmployersInput;
  description?: string | null;
  companyName?: string | null;
  website?: string | null;
  contactEmail?: string | null;
  internships?: InternshipCreateNestedManyWithoutEmployersInput;
};

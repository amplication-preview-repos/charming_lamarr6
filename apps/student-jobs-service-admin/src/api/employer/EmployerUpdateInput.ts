import { JobUpdateManyWithoutEmployersInput } from "./JobUpdateManyWithoutEmployersInput";
import { InternshipUpdateManyWithoutEmployersInput } from "./InternshipUpdateManyWithoutEmployersInput";

export type EmployerUpdateInput = {
  jobs?: JobUpdateManyWithoutEmployersInput;
  description?: string | null;
  companyName?: string | null;
  website?: string | null;
  contactEmail?: string | null;
  internships?: InternshipUpdateManyWithoutEmployersInput;
};

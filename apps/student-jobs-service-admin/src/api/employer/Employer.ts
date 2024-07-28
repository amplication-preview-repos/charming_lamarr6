import { Job } from "../job/Job";
import { Internship } from "../internship/Internship";

export type Employer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  jobs?: Array<Job>;
  description: string | null;
  companyName: string | null;
  website: string | null;
  contactEmail: string | null;
  internships?: Array<Internship>;
};

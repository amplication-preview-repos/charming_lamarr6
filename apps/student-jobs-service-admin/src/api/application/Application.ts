import { Job } from "../job/Job";
import { User } from "../user/User";

export type Application = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  submissionDate: Date | null;
  status?: "Option1" | null;
  job?: Job | null;
  user?: User | null;
};

import { Employer } from "../employer/Employer";

export type Internship = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  location: string | null;
  duration: string | null;
  stipend: number | null;
  title: string | null;
  description: string | null;
  employer?: Employer | null;
};

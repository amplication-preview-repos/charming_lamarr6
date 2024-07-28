import { Employer } from "../employer/Employer";
import { Application } from "../application/Application";

export type Job = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  location: string | null;
  salary: number | null;
  postedDate: Date | null;
  employer?: Employer | null;
  applications?: Array<Application>;
};

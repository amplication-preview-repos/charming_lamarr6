import { StringFilter } from "../../util/StringFilter";
import { JobListRelationFilter } from "../job/JobListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { InternshipListRelationFilter } from "../internship/InternshipListRelationFilter";

export type EmployerWhereInput = {
  id?: StringFilter;
  jobs?: JobListRelationFilter;
  description?: StringNullableFilter;
  companyName?: StringNullableFilter;
  website?: StringNullableFilter;
  contactEmail?: StringNullableFilter;
  internships?: InternshipListRelationFilter;
};

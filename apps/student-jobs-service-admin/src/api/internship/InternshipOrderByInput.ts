import { SortOrder } from "../../util/SortOrder";

export type InternshipOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  location?: SortOrder;
  duration?: SortOrder;
  stipend?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  employerId?: SortOrder;
};

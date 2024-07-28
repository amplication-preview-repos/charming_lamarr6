import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  location?: SortOrder;
  salary?: SortOrder;
  postedDate?: SortOrder;
  employerId?: SortOrder;
};

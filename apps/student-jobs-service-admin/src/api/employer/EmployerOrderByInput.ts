import { SortOrder } from "../../util/SortOrder";

export type EmployerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  companyName?: SortOrder;
  website?: SortOrder;
  contactEmail?: SortOrder;
};

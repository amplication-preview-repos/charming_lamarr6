import { SortOrder } from "../../util/SortOrder";

export type ApplicationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  submissionDate?: SortOrder;
  status?: SortOrder;
  jobId?: SortOrder;
  userId?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  education?: SortOrder;
  photo?: SortOrder;
  userType?: SortOrder;
  username?: SortOrder;
};

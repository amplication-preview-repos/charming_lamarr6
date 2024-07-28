import { InputJsonValue } from "../../types";
import { ApplicationUpdateManyWithoutUsersInput } from "./ApplicationUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  education?: string | null;
  photo?: InputJsonValue;
  userType?: "Option1" | null;
  applications?: ApplicationUpdateManyWithoutUsersInput;
  username?: string | null;
};

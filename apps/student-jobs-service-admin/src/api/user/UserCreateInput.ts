import { InputJsonValue } from "../../types";
import { ApplicationCreateNestedManyWithoutUsersInput } from "./ApplicationCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  education?: string | null;
  photo?: InputJsonValue;
  userType?: "Option1" | null;
  applications?: ApplicationCreateNestedManyWithoutUsersInput;
  username?: string | null;
};

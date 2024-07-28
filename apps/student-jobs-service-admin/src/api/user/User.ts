import { JsonValue } from "type-fest";
import { Application } from "../application/Application";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  roles: JsonValue;
  education: string | null;
  photo: JsonValue;
  userType?: "Option1" | null;
  applications?: Array<Application>;
  username: string | null;
};

import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  education?: StringNullableFilter;
  photo?: JsonFilter;
  userType?: "Option1";
  applications?: ApplicationListRelationFilter;
  username?: StringNullableFilter;
};

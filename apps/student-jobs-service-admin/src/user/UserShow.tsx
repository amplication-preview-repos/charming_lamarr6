import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { JOB_TITLE_FIELD } from "../job/JobTitle";
import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Email" source="email" />
        <TextField label="Roles" source="roles" />
        <TextField label="education" source="education" />
        <TextField label="photo" source="photo" />
        <TextField label="userType" source="userType" />
        <TextField label="username" source="username" />
        <ReferenceManyField
          reference="Application"
          target="userId"
          label="Applications"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="submissionDate" source="submissionDate" />
            <TextField label="status" source="status" />
            <ReferenceField label="job" source="job.id" reference="Job">
              <TextField source={JOB_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

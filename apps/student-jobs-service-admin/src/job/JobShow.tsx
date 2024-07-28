import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { JOB_TITLE_FIELD } from "./JobTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { EMPLOYER_TITLE_FIELD } from "../employer/EmployerTitle";

export const JobShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="title" source="title" />
        <TextField label="description" source="description" />
        <TextField label="location" source="location" />
        <TextField label="salary" source="salary" />
        <TextField label="postedDate" source="postedDate" />
        <ReferenceField
          label="employer"
          source="employer.id"
          reference="Employer"
        >
          <TextField source={EMPLOYER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Application"
          target="jobId"
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

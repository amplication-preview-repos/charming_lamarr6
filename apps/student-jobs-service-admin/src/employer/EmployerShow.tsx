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

import { EMPLOYER_TITLE_FIELD } from "./EmployerTitle";

export const EmployerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="description" source="description" />
        <TextField label="companyName" source="companyName" />
        <TextField label="website" source="website" />
        <TextField label="contactEmail" source="contactEmail" />
        <ReferenceManyField reference="Job" target="employerId" label="Jobs">
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Internship"
          target="employerId"
          label="Internships"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="location" source="location" />
            <TextField label="duration" source="duration" />
            <TextField label="stipend" source="stipend" />
            <TextField label="title" source="title" />
            <TextField label="description" source="description" />
            <ReferenceField
              label="employer"
              source="employer.id"
              reference="Employer"
            >
              <TextField source={EMPLOYER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

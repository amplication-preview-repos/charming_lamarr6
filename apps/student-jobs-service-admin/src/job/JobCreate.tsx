import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EmployerTitle } from "../employer/EmployerTitle";
import { ApplicationTitle } from "../application/ApplicationTitle";

export const JobCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="location" source="location" />
        <NumberInput label="salary" source="salary" />
        <DateTimeInput label="postedDate" source="postedDate" />
        <ReferenceInput
          source="employer.id"
          reference="Employer"
          label="employer"
        >
          <SelectInput optionText={EmployerTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="applications"
          reference="Application"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApplicationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

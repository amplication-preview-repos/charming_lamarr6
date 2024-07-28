import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EmployerTitle } from "../employer/EmployerTitle";

export const InternshipCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="location" source="location" />
        <TextInput label="duration" source="duration" />
        <NumberInput label="stipend" source="stipend" />
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="employer.id"
          reference="Employer"
          label="employer"
        >
          <SelectInput optionText={EmployerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

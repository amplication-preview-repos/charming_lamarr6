import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { JobTitle } from "../job/JobTitle";
import { InternshipTitle } from "../internship/InternshipTitle";

export const EmployerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="jobs"
          reference="Job"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="companyName" source="companyName" />
        <TextInput label="website" source="website" />
        <TextInput label="contactEmail" source="contactEmail" type="email" />
        <ReferenceArrayInput
          source="internships"
          reference="Internship"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InternshipTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

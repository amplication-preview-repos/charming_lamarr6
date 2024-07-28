import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EMPLOYER_TITLE_FIELD } from "../employer/EmployerTitle";

export const InternshipList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Internships"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};

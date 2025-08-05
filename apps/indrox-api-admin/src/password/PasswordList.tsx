import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const PasswordList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Passwords"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="accessPermissions" source="accessPermissions" />
        <ReferenceField label="Client" source="client.id" reference="Client">
          <TextField source={CLIENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="credentials" source="credentials" />
        <TextField label="expirationDate" source="expirationDate" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="usageAudit" source="usageAudit" />{" "}
      </Datagrid>
    </List>
  );
};

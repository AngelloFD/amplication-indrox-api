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

export const LeadList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Leads"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="assignedResponsible" source="assignedResponsible" />
        <ReferenceField label="Client" source="client.id" reference="Client">
          <TextField source={CLIENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField
          label="estimatedProjectValue"
          source="estimatedProjectValue"
        />
        <TextField label="ID" source="id" />
        <TextField label="leadStatus" source="leadStatus" />
        <TextField label="leadType" source="leadType" />
        <TextField label="name" source="name" />
        <TextField label="notes" source="notes" />
        <TextField label="phone" source="phone" />
        <TextField label="serviceOfInterest" source="serviceOfInterest" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};

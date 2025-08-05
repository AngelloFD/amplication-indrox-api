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
import { SERVICE_TITLE_FIELD } from "../service/ServiceTitle";

export const ClientList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Clients"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="billingInfo" source="billingInfo" />
        <TextField label="clientStatus" source="clientStatus" />
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="fullName" source="fullName" />
        <TextField label="ID" source="id" />
        <TextField label="paymentMethods" source="paymentMethods" />
        <TextField label="phone" source="phone" />
        <TextField label="portalCredentials" source="portalCredentials" />
        <ReferenceField label="Service" source="service.id" reference="Service">
          <TextField source={SERVICE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};

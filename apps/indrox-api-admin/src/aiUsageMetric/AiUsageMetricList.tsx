import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";
import { SERVICE_TITLE_FIELD } from "../service/ServiceTitle";

export const AiUsageMetricList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AIUsageMetrics"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Client" source="client.id" reference="Client">
          <TextField source={CLIENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="cost" source="cost" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="messageCount" source="messageCount" />
        <ReferenceField label="Service" source="service.id" reference="Service">
          <TextField source={SERVICE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="serviceType" source="serviceType" />
        <TextField label="tokenConsumption" source="tokenConsumption" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="usageDate" source="usageDate" />{" "}
      </Datagrid>
    </List>
  );
};

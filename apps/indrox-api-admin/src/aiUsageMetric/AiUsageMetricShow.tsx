import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";
import { SERVICE_TITLE_FIELD } from "../service/ServiceTitle";

export const AiUsageMetricShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="usageDate" source="usageDate" />
      </SimpleShowLayout>
    </Show>
  );
};

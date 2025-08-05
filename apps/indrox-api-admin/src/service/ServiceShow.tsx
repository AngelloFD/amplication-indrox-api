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

import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";
import { SERVICE_TITLE_FIELD } from "./ServiceTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const ServiceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="basePrice" source="basePrice" />
        <TextField label="category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="deliveryTimeline" source="deliveryTimeline" />
        <TextField label="description" source="description" />
        <TextField label="duration" source="duration" />
        <TextField label="ID" source="id" />
        <TextField label="serviceName" source="serviceName" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AiUsageMetric"
          target="serviceId"
          label="AIUsageMetrics"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Client"
              source="client.id"
              reference="Client"
            >
              <TextField source={CLIENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="cost" source="cost" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="messageCount" source="messageCount" />
            <ReferenceField
              label="Service"
              source="service.id"
              reference="Service"
            >
              <TextField source={SERVICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="serviceType" source="serviceType" />
            <TextField label="tokenConsumption" source="tokenConsumption" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="usageDate" source="usageDate" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Client"
          target="serviceId"
          label="Clients"
        >
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
            <ReferenceField
              label="Service"
              source="service.id"
              reference="Service"
            >
              <TextField source={SERVICE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Invoice"
          target="serviceId"
          label="Invoices"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="amount" source="amount" />
            <TextField label="attachments" source="attachments" />
            <ReferenceField
              label="Client"
              source="client.id"
              reference="Client"
            >
              <TextField source={CLIENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="dueDate" source="dueDate" />
            <TextField label="generatedAt" source="generatedAt" />
            <TextField label="ID" source="id" />
            <TextField label="invoiceType" source="invoiceType" />
            <TextField label="paymentHistory" source="paymentHistory" />
            <TextField label="paymentStatus" source="paymentStatus" />
            <TextField label="paymentTerms" source="paymentTerms" />
            <ReferenceField
              label="Project"
              source="project.id"
              reference="Project"
            >
              <TextField source={PROJECT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Service"
              source="service.id"
              reference="Service"
            >
              <TextField source={SERVICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="tax" source="tax" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Project"
          target="serviceId"
          label="Projects"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Client"
              source="client.id"
              reference="Client"
            >
              <TextField source={CLIENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="endDate" source="endDate" />
            <TextField label="ID" source="id" />
            <TextField label="monthlyAmountDue" source="monthlyAmountDue" />
            <TextField label="name" source="name" />
            <TextField label="paymentSchedule" source="paymentSchedule" />
            <TextField label="progress" source="progress" />
            <ReferenceField
              label="Service"
              source="service.id"
              reference="Service"
            >
              <TextField source={SERVICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="startDate" source="startDate" />
            <TextField label="status" source="status" />
            <TextField label="totalPrice" source="totalPrice" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

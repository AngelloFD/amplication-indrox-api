import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CLIENT_TITLE_FIELD } from "./ClientTitle";
import { SERVICE_TITLE_FIELD } from "../service/ServiceTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const ClientShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AiUsageMetric"
          target="clientId"
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
          reference="Invoice"
          target="clientId"
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
        <ReferenceManyField reference="Lead" target="clientId" label="Leads">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField
              label="assignedResponsible"
              source="assignedResponsible"
            />
            <ReferenceField
              label="Client"
              source="client.id"
              reference="Client"
            >
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Password"
          target="clientId"
          label="Passwords"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="accessPermissions" source="accessPermissions" />
            <ReferenceField
              label="Client"
              source="client.id"
              reference="Client"
            >
              <TextField source={CLIENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="credentials" source="credentials" />
            <TextField label="expirationDate" source="expirationDate" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Project"
              source="project.id"
              reference="Project"
            >
              <TextField source={PROJECT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="usageAudit" source="usageAudit" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Project"
          target="clientId"
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

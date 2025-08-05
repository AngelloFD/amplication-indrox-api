import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";

import { AiUsageMetricTitle } from "../aiUsageMetric/AiUsageMetricTitle";
import { InvoiceTitle } from "../invoice/InvoiceTitle";
import { LeadTitle } from "../lead/LeadTitle";
import { PasswordTitle } from "../password/PasswordTitle";
import { ProjectTitle } from "../project/ProjectTitle";
import { ServiceTitle } from "../service/ServiceTitle";

export const ClientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="aiUsageMetrics" reference="AiUsageMetric">
          <SelectArrayInput
            optionText={AiUsageMetricTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <div />
        <SelectInput
          source="clientStatus"
          label="clientStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="company" source="company" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="fullName" source="fullName" />
        <ReferenceArrayInput source="invoices" reference="Invoice">
          <SelectArrayInput
            optionText={InvoiceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="leads" reference="Lead">
          <SelectArrayInput
            optionText={LeadTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="passwords" reference="Password">
          <SelectArrayInput
            optionText={PasswordTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <div />
        <TextInput label="phone" source="phone" />
        <div />
        <ReferenceArrayInput source="projects" reference="Project">
          <SelectArrayInput
            optionText={ProjectTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="service.id" reference="Service" label="Service">
          <SelectInput optionText={ServiceTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

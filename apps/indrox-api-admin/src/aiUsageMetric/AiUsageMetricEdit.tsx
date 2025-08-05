import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { ClientTitle } from "../client/ClientTitle";
import { ServiceTitle } from "../service/ServiceTitle";

export const AiUsageMetricEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <NumberInput label="cost" source="cost" />
        <NumberInput step={1} label="messageCount" source="messageCount" />
        <ReferenceInput source="service.id" reference="Service" label="Service">
          <SelectInput optionText={ServiceTitle} />
        </ReferenceInput>
        <TextInput label="serviceType" source="serviceType" />
        <NumberInput
          step={1}
          label="tokenConsumption"
          source="tokenConsumption"
        />
        <DateTimeInput label="usageDate" source="usageDate" />
      </SimpleForm>
    </Edit>
  );
};

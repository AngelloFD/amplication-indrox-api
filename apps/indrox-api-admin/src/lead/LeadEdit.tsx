import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ClientTitle } from "../client/ClientTitle";

export const LeadEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="assignedResponsible" source="assignedResponsible" />
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <TextInput label="company" source="company" />
        <TextInput label="email" source="email" type="email" />
        <NumberInput
          label="estimatedProjectValue"
          source="estimatedProjectValue"
        />
        <SelectInput
          source="leadStatus"
          label="leadStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="leadType"
          label="leadType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="name" source="name" />
        <TextInput label="notes" multiline source="notes" />
        <TextInput label="phone" source="phone" />
        <TextInput label="serviceOfInterest" source="serviceOfInterest" />
      </SimpleForm>
    </Edit>
  );
};

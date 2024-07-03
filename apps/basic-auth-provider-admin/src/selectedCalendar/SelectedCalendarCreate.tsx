import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrigUserTitle } from "../origUser/OrigUserTitle";

export const SelectedCalendarCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="External Id" source="externalId" />
        <TextInput label="Integration" source="integration" />
        <ReferenceInput source="user.id" reference="OrigUser" label="User">
          <SelectInput optionText={OrigUserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

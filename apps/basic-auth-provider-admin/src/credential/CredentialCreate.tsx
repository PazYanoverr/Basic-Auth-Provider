import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AppModelTitle } from "../appModel/AppModelTitle";
import { DestinationCalendarTitle } from "../destinationCalendar/DestinationCalendarTitle";
import { OrigUserTitle } from "../origUser/OrigUserTitle";

export const CredentialCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="appField.id"
          reference="AppModel"
          label="App Field"
        >
          <SelectInput optionText={AppModelTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="destinationCalendars"
          reference="DestinationCalendar"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DestinationCalendarTitle} />
        </ReferenceArrayInput>
        <div />
        <TextInput label="Type Field" source="typeField" />
        <ReferenceInput source="user.id" reference="OrigUser" label="User">
          <SelectInput optionText={OrigUserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

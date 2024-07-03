import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { OrigUserTitle } from "../origUser/OrigUserTitle";

export const AccountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Access Token" source="accessToken" />
        <NumberInput step={1} label="Expires At" source="expiresAt" />
        <TextInput label="Id Token" source="idToken" />
        <TextInput label="Provider" source="provider" />
        <TextInput label="Provider Account Id" source="providerAccountId" />
        <TextInput label="Refresh Token" source="refreshToken" />
        <TextInput label="Scope" source="scope" />
        <TextInput label="Session State" source="sessionState" />
        <TextInput label="Token Type" source="tokenType" />
        <TextInput label="Type Field" source="typeField" />
        <ReferenceInput source="user.id" reference="OrigUser" label="User">
          <SelectInput optionText={OrigUserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

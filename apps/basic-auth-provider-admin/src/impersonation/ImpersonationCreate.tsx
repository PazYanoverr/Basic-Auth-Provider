import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrigUserTitle } from "../origUser/OrigUserTitle";

export const ImpersonationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="impersonatedBy.id"
          reference="OrigUser"
          label="Impersonated By"
        >
          <SelectInput optionText={OrigUserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="impersonatedUser.id"
          reference="OrigUser"
          label="Impersonated User"
        >
          <SelectInput optionText={OrigUserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

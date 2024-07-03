import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrigUserTitle } from "../origUser/OrigUserTitle";

export const ImpersonationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

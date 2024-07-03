import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { ORIGUSER_TITLE_FIELD } from "../origUser/OrigUserTitle";

export const ImpersonationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Impersonated By"
          source="origuser.id"
          reference="OrigUser"
        >
          <TextField source={ORIGUSER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Impersonated User"
          source="origuser.id"
          reference="OrigUser"
        >
          <TextField source={ORIGUSER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};

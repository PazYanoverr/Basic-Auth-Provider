import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { APPMODEL_TITLE_FIELD } from "../appModel/AppModelTitle";
import { ORIGUSER_TITLE_FIELD } from "../origUser/OrigUserTitle";

export const ApiKeyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="App Field"
          source="appmodel.id"
          reference="AppModel"
        >
          <TextField source={APPMODEL_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Expires At" source="expiresAt" />
        <TextField label="Hashed Key" source="hashedKey" />
        <TextField label="ID" source="id" />
        <TextField label="Last Used At" source="lastUsedAt" />
        <TextField label="Note" source="note" />
        <ReferenceField label="User" source="origuser.id" reference="OrigUser">
          <TextField source={ORIGUSER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};

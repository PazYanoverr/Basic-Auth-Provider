import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { ORIGUSER_TITLE_FIELD } from "../origUser/OrigUserTitle";

export const SessionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Expires" source="expires" />
        <TextField label="ID" source="id" />
        <TextField label="Session Token" source="sessionToken" />
        <ReferenceField label="User" source="origuser.id" reference="OrigUser">
          <TextField source={ORIGUSER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};

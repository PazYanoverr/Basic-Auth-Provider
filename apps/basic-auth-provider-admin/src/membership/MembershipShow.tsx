import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  ReferenceField,
} from "react-admin";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";
import { ORIGUSER_TITLE_FIELD } from "../origUser/OrigUserTitle";

export const MembershipShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Accepted" source="accepted" />
        <TextField label="ID" source="id" />
        <TextField label="Role" source="role" />
        <ReferenceField label="Team" source="team.id" reference="Team">
          <TextField source={TEAM_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="User" source="origuser.id" reference="OrigUser">
          <TextField source={ORIGUSER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};

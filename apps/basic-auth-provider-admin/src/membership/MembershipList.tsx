import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";
import { ORIGUSER_TITLE_FIELD } from "../origUser/OrigUserTitle";

export const MembershipList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Memberships"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="Accepted" source="accepted" />
        <TextField label="ID" source="id" />
        <TextField label="Role" source="role" />
        <ReferenceField label="Team" source="team.id" reference="Team">
          <TextField source={TEAM_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="User" source="origuser.id" reference="OrigUser">
          <TextField source={ORIGUSER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

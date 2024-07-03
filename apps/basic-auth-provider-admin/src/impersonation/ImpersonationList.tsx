import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ORIGUSER_TITLE_FIELD } from "../origUser/OrigUserTitle";

export const ImpersonationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Impersonations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};

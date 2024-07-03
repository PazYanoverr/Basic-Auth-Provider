import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { TeamTitle } from "../team/TeamTitle";
import { OrigUserTitle } from "../origUser/OrigUserTitle";

export const MembershipCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Accepted" source="accepted" />
        <SelectInput
          source="role"
          label="Role"
          choices={[
            { label: "MEMBER", value: "MEMBER" },
            { label: "ADMIN", value: "ADMIN" },
            { label: "OWNER", value: "OWNER" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="team.id" reference="Team" label="Team">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="OrigUser" label="User">
          <SelectInput optionText={OrigUserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

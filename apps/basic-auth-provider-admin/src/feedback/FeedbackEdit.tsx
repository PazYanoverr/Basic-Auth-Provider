import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { OrigUserTitle } from "../origUser/OrigUserTitle";

export const FeedbackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Comment" source="comment" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Rating" source="rating" />
        <ReferenceInput source="user.id" reference="OrigUser" label="User">
          <SelectInput optionText={OrigUserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

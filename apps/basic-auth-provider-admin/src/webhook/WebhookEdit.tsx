import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AppModelTitle } from "../appModel/AppModelTitle";
import { EventTypeTitle } from "../eventType/EventTypeTitle";
import { OrigUserTitle } from "../origUser/OrigUserTitle";

export const WebhookEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Active" source="active" />
        <ReferenceInput
          source="appField.id"
          reference="AppModel"
          label="App Field"
        >
          <SelectInput optionText={AppModelTitle} />
        </ReferenceInput>
        <SelectArrayInput
          label="Event Triggers"
          source="eventTriggers"
          choices={[
            { label: "BOOKING_CREATED", value: "BOOKING_CREATED" },
            { label: "BOOKING_RESCHEDULED", value: "BOOKING_RESCHEDULED" },
            { label: "BOOKING_CANCELLED", value: "BOOKING_CANCELLED" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="eventType.id"
          reference="EventType"
          label="Event Type"
        >
          <SelectInput optionText={EventTypeTitle} />
        </ReferenceInput>
        <TextInput label="Payload Template" source="payloadTemplate" />
        <TextInput label="Secret" source="secret" />
        <TextInput label="Subscriber Url" source="subscriberUrl" />
        <ReferenceInput source="user.id" reference="OrigUser" label="User">
          <SelectInput optionText={OrigUserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

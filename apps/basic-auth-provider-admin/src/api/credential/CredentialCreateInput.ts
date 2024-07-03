import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";
import { DestinationCalendarCreateNestedManyWithoutCredentialsInput } from "./DestinationCalendarCreateNestedManyWithoutCredentialsInput";
import { InputJsonValue } from "../../types";
import { OrigUserWhereUniqueInput } from "../origUser/OrigUserWhereUniqueInput";

export type CredentialCreateInput = {
  appField?: AppModelWhereUniqueInput | null;
  destinationCalendars?: DestinationCalendarCreateNestedManyWithoutCredentialsInput;
  key: InputJsonValue;
  typeField: string;
  user?: OrigUserWhereUniqueInput | null;
};

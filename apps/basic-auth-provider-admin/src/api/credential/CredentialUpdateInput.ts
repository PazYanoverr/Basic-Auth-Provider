import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";
import { DestinationCalendarUpdateManyWithoutCredentialsInput } from "./DestinationCalendarUpdateManyWithoutCredentialsInput";
import { InputJsonValue } from "../../types";
import { OrigUserWhereUniqueInput } from "../origUser/OrigUserWhereUniqueInput";

export type CredentialUpdateInput = {
  appField?: AppModelWhereUniqueInput | null;
  destinationCalendars?: DestinationCalendarUpdateManyWithoutCredentialsInput;
  key?: InputJsonValue;
  typeField?: string;
  user?: OrigUserWhereUniqueInput | null;
};

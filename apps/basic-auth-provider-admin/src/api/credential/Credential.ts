import { AppModel } from "../appModel/AppModel";
import { DestinationCalendar } from "../destinationCalendar/DestinationCalendar";
import { JsonValue } from "type-fest";
import { OrigUser } from "../origUser/OrigUser";

export type Credential = {
  appField?: AppModel | null;
  destinationCalendars?: Array<DestinationCalendar>;
  id: number;
  key: JsonValue;
  typeField: string;
  user?: OrigUser | null;
};

import { Booking } from "../booking/Booking";
import { Credential } from "../credential/Credential";
import { EventType } from "../eventType/EventType";
import { OrigUser } from "../origUser/OrigUser";

export type DestinationCalendar = {
  booking?: Booking | null;
  credential?: Credential | null;
  eventType?: EventType | null;
  externalId: string;
  id: number;
  integration: string;
  user?: OrigUser | null;
};

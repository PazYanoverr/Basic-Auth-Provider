import { AppModel } from "../appModel/AppModel";
import { EventType } from "../eventType/EventType";
import { OrigUser } from "../origUser/OrigUser";

export type Webhook = {
  active: boolean;
  appField?: AppModel | null;
  createdAt: Date;
  eventTriggers?: Array<
    "BOOKING_CREATED" | "BOOKING_RESCHEDULED" | "BOOKING_CANCELLED"
  >;
  eventType?: EventType | null;
  id: string;
  payloadTemplate: string | null;
  secret: string | null;
  subscriberUrl: string;
  user?: OrigUser | null;
};

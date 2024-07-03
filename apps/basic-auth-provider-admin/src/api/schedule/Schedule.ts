import { Availability } from "../availability/Availability";
import { EventType } from "../eventType/EventType";
import { OrigUser } from "../origUser/OrigUser";

export type Schedule = {
  availability?: Array<Availability>;
  eventType?: Array<EventType>;
  id: number;
  name: string;
  timeZone: string | null;
  user?: OrigUser;
};

import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { CredentialWhereUniqueInput } from "../credential/CredentialWhereUniqueInput";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { OrigUserWhereUniqueInput } from "../origUser/OrigUserWhereUniqueInput";

export type DestinationCalendarUpdateInput = {
  booking?: BookingWhereUniqueInput | null;
  credential?: CredentialWhereUniqueInput | null;
  eventType?: EventTypeWhereUniqueInput | null;
  externalId?: string;
  integration?: string;
  user?: OrigUserWhereUniqueInput | null;
};

import { OrigUserWhereInput } from "./OrigUserWhereInput";
import { OrigUserOrderByInput } from "./OrigUserOrderByInput";

export type OrigUserFindManyArgs = {
  where?: OrigUserWhereInput;
  orderBy?: Array<OrigUserOrderByInput>;
  skip?: number;
  take?: number;
};

import { OrigUserWhereUniqueInput } from "../origUser/OrigUserWhereUniqueInput";

export type FeedbackUpdateInput = {
  comment?: string | null;
  date?: Date;
  rating?: string;
  user?: OrigUserWhereUniqueInput;
};

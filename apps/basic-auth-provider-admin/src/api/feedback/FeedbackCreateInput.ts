import { OrigUserWhereUniqueInput } from "../origUser/OrigUserWhereUniqueInput";

export type FeedbackCreateInput = {
  comment?: string | null;
  date: Date;
  rating: string;
  user: OrigUserWhereUniqueInput;
};

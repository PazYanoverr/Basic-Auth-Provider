import { OrigUser } from "../origUser/OrigUser";

export type Feedback = {
  comment: string | null;
  date: Date;
  id: number;
  rating: string;
  user?: OrigUser;
};

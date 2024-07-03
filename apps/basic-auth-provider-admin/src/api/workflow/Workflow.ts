import { WorkflowsOnEventType } from "../workflowsOnEventType/WorkflowsOnEventType";
import { WorkflowStep } from "../workflowStep/WorkflowStep";
import { OrigUser } from "../origUser/OrigUser";

export type Workflow = {
  activeOn?: Array<WorkflowsOnEventType>;
  id: number;
  name: string;
  steps?: Array<WorkflowStep>;
  time: number | null;
  timeUnit?: "DAY" | "HOUR" | "MINUTE" | null;
  trigger?: "BEFORE_EVENT" | "EVENT_CANCELLED" | "NEW_EVENT";
  user?: OrigUser;
};

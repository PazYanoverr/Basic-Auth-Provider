import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkflowsOnEventTypeService } from "./workflowsOnEventType.service";
import { WorkflowsOnEventTypeControllerBase } from "./base/workflowsOnEventType.controller.base";

@swagger.ApiTags("workflowsOnEventTypes")
@common.Controller("workflowsOnEventTypes")
export class WorkflowsOnEventTypeController extends WorkflowsOnEventTypeControllerBase {
  constructor(
    protected readonly service: WorkflowsOnEventTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

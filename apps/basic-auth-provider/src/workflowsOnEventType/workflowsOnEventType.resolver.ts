import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WorkflowsOnEventTypeResolverBase } from "./base/workflowsOnEventType.resolver.base";
import { WorkflowsOnEventType } from "./base/WorkflowsOnEventType";
import { WorkflowsOnEventTypeService } from "./workflowsOnEventType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkflowsOnEventType)
export class WorkflowsOnEventTypeResolver extends WorkflowsOnEventTypeResolverBase {
  constructor(
    protected readonly service: WorkflowsOnEventTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WorkflowReminderResolverBase } from "./base/workflowReminder.resolver.base";
import { WorkflowReminder } from "./base/WorkflowReminder";
import { WorkflowReminderService } from "./workflowReminder.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkflowReminder)
export class WorkflowReminderResolver extends WorkflowReminderResolverBase {
  constructor(
    protected readonly service: WorkflowReminderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

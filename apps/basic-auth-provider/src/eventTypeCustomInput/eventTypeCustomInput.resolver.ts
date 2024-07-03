import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EventTypeCustomInputResolverBase } from "./base/eventTypeCustomInput.resolver.base";
import { EventTypeCustomInput } from "./base/EventTypeCustomInput";
import { EventTypeCustomInputService } from "./eventTypeCustomInput.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EventTypeCustomInput)
export class EventTypeCustomInputResolver extends EventTypeCustomInputResolverBase {
  constructor(
    protected readonly service: EventTypeCustomInputService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

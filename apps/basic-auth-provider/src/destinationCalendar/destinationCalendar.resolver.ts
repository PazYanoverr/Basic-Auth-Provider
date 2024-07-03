import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DestinationCalendarResolverBase } from "./base/destinationCalendar.resolver.base";
import { DestinationCalendar } from "./base/DestinationCalendar";
import { DestinationCalendarService } from "./destinationCalendar.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DestinationCalendar)
export class DestinationCalendarResolver extends DestinationCalendarResolverBase {
  constructor(
    protected readonly service: DestinationCalendarService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SelectedCalendarResolverBase } from "./base/selectedCalendar.resolver.base";
import { SelectedCalendar } from "./base/SelectedCalendar";
import { SelectedCalendarService } from "./selectedCalendar.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SelectedCalendar)
export class SelectedCalendarResolver extends SelectedCalendarResolverBase {
  constructor(
    protected readonly service: SelectedCalendarService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DailyEventReferenceResolverBase } from "./base/dailyEventReference.resolver.base";
import { DailyEventReference } from "./base/DailyEventReference";
import { DailyEventReferenceService } from "./dailyEventReference.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DailyEventReference)
export class DailyEventReferenceResolver extends DailyEventReferenceResolverBase {
  constructor(
    protected readonly service: DailyEventReferenceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

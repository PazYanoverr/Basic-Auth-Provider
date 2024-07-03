import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ImpersonationResolverBase } from "./base/impersonation.resolver.base";
import { Impersonation } from "./base/Impersonation";
import { ImpersonationService } from "./impersonation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Impersonation)
export class ImpersonationResolver extends ImpersonationResolverBase {
  constructor(
    protected readonly service: ImpersonationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

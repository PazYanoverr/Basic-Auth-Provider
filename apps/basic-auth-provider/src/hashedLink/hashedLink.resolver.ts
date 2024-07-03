import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HashedLinkResolverBase } from "./base/hashedLink.resolver.base";
import { HashedLink } from "./base/HashedLink";
import { HashedLinkService } from "./hashedLink.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HashedLink)
export class HashedLinkResolver extends HashedLinkResolverBase {
  constructor(
    protected readonly service: HashedLinkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

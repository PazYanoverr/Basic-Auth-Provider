import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ResetPasswordRequestResolverBase } from "./base/resetPasswordRequest.resolver.base";
import { ResetPasswordRequest } from "./base/ResetPasswordRequest";
import { ResetPasswordRequestService } from "./resetPasswordRequest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ResetPasswordRequest)
export class ResetPasswordRequestResolver extends ResetPasswordRequestResolverBase {
  constructor(
    protected readonly service: ResetPasswordRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

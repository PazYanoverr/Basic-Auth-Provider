import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BookingReferenceResolverBase } from "./base/bookingReference.resolver.base";
import { BookingReference } from "./base/BookingReference";
import { BookingReferenceService } from "./bookingReference.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BookingReference)
export class BookingReferenceResolver extends BookingReferenceResolverBase {
  constructor(
    protected readonly service: BookingReferenceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

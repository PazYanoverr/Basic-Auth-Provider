import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ReminderMailResolverBase } from "./base/reminderMail.resolver.base";
import { ReminderMail } from "./base/ReminderMail";
import { ReminderMailService } from "./reminderMail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ReminderMail)
export class ReminderMailResolver extends ReminderMailResolverBase {
  constructor(
    protected readonly service: ReminderMailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReminderMailService } from "./reminderMail.service";
import { ReminderMailControllerBase } from "./base/reminderMail.controller.base";

@swagger.ApiTags("reminderMails")
@common.Controller("reminderMails")
export class ReminderMailController extends ReminderMailControllerBase {
  constructor(
    protected readonly service: ReminderMailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

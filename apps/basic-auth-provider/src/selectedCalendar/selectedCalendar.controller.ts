import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SelectedCalendarService } from "./selectedCalendar.service";
import { SelectedCalendarControllerBase } from "./base/selectedCalendar.controller.base";

@swagger.ApiTags("selectedCalendars")
@common.Controller("selectedCalendars")
export class SelectedCalendarController extends SelectedCalendarControllerBase {
  constructor(
    protected readonly service: SelectedCalendarService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

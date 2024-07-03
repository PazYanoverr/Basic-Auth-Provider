import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DailyEventReferenceService } from "./dailyEventReference.service";
import { DailyEventReferenceControllerBase } from "./base/dailyEventReference.controller.base";

@swagger.ApiTags("dailyEventReferences")
@common.Controller("dailyEventReferences")
export class DailyEventReferenceController extends DailyEventReferenceControllerBase {
  constructor(
    protected readonly service: DailyEventReferenceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ImpersonationService } from "./impersonation.service";
import { ImpersonationControllerBase } from "./base/impersonation.controller.base";

@swagger.ApiTags("impersonations")
@common.Controller("impersonations")
export class ImpersonationController extends ImpersonationControllerBase {
  constructor(
    protected readonly service: ImpersonationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

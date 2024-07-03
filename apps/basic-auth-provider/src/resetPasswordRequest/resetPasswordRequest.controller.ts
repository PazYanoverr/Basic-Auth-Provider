import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ResetPasswordRequestService } from "./resetPasswordRequest.service";
import { ResetPasswordRequestControllerBase } from "./base/resetPasswordRequest.controller.base";

@swagger.ApiTags("resetPasswordRequests")
@common.Controller("resetPasswordRequests")
export class ResetPasswordRequestController extends ResetPasswordRequestControllerBase {
  constructor(
    protected readonly service: ResetPasswordRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

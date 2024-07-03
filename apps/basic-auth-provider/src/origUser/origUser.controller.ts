import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrigUserService } from "./origUser.service";
import { OrigUserControllerBase } from "./base/origUser.controller.base";

@swagger.ApiTags("origUsers")
@common.Controller("origUsers")
export class OrigUserController extends OrigUserControllerBase {
  constructor(
    protected readonly service: OrigUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

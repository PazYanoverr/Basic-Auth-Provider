import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HashedLinkService } from "./hashedLink.service";
import { HashedLinkControllerBase } from "./base/hashedLink.controller.base";

@swagger.ApiTags("hashedLinks")
@common.Controller("hashedLinks")
export class HashedLinkController extends HashedLinkControllerBase {
  constructor(
    protected readonly service: HashedLinkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

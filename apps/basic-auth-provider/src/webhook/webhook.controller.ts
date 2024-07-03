import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WebhookService } from "./webhook.service";
import { WebhookControllerBase } from "./base/webhook.controller.base";

@swagger.ApiTags("webhooks")
@common.Controller("webhooks")
export class WebhookController extends WebhookControllerBase {
  constructor(
    protected readonly service: WebhookService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

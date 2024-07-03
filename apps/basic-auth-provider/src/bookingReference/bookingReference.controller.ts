import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BookingReferenceService } from "./bookingReference.service";
import { BookingReferenceControllerBase } from "./base/bookingReference.controller.base";

@swagger.ApiTags("bookingReferences")
@common.Controller("bookingReferences")
export class BookingReferenceController extends BookingReferenceControllerBase {
  constructor(
    protected readonly service: BookingReferenceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DestinationCalendarModuleBase } from "./base/destinationCalendar.module.base";
import { DestinationCalendarService } from "./destinationCalendar.service";
import { DestinationCalendarController } from "./destinationCalendar.controller";
import { DestinationCalendarResolver } from "./destinationCalendar.resolver";

@Module({
  imports: [DestinationCalendarModuleBase, forwardRef(() => AuthModule)],
  controllers: [DestinationCalendarController],
  providers: [DestinationCalendarService, DestinationCalendarResolver],
  exports: [DestinationCalendarService],
})
export class DestinationCalendarModule {}

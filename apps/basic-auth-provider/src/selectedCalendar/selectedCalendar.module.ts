import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SelectedCalendarModuleBase } from "./base/selectedCalendar.module.base";
import { SelectedCalendarService } from "./selectedCalendar.service";
import { SelectedCalendarController } from "./selectedCalendar.controller";
import { SelectedCalendarResolver } from "./selectedCalendar.resolver";

@Module({
  imports: [SelectedCalendarModuleBase, forwardRef(() => AuthModule)],
  controllers: [SelectedCalendarController],
  providers: [SelectedCalendarService, SelectedCalendarResolver],
  exports: [SelectedCalendarService],
})
export class SelectedCalendarModule {}

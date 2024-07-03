import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EventTypeCustomInputModuleBase } from "./base/eventTypeCustomInput.module.base";
import { EventTypeCustomInputService } from "./eventTypeCustomInput.service";
import { EventTypeCustomInputController } from "./eventTypeCustomInput.controller";
import { EventTypeCustomInputResolver } from "./eventTypeCustomInput.resolver";

@Module({
  imports: [EventTypeCustomInputModuleBase, forwardRef(() => AuthModule)],
  controllers: [EventTypeCustomInputController],
  providers: [EventTypeCustomInputService, EventTypeCustomInputResolver],
  exports: [EventTypeCustomInputService],
})
export class EventTypeCustomInputModule {}

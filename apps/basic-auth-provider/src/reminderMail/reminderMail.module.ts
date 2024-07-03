import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReminderMailModuleBase } from "./base/reminderMail.module.base";
import { ReminderMailService } from "./reminderMail.service";
import { ReminderMailController } from "./reminderMail.controller";
import { ReminderMailResolver } from "./reminderMail.resolver";

@Module({
  imports: [ReminderMailModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReminderMailController],
  providers: [ReminderMailService, ReminderMailResolver],
  exports: [ReminderMailService],
})
export class ReminderMailModule {}

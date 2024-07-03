import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkflowReminderModuleBase } from "./base/workflowReminder.module.base";
import { WorkflowReminderService } from "./workflowReminder.service";
import { WorkflowReminderController } from "./workflowReminder.controller";
import { WorkflowReminderResolver } from "./workflowReminder.resolver";

@Module({
  imports: [WorkflowReminderModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkflowReminderController],
  providers: [WorkflowReminderService, WorkflowReminderResolver],
  exports: [WorkflowReminderService],
})
export class WorkflowReminderModule {}

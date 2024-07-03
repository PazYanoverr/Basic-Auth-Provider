import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkflowsOnEventTypeModuleBase } from "./base/workflowsOnEventType.module.base";
import { WorkflowsOnEventTypeService } from "./workflowsOnEventType.service";
import { WorkflowsOnEventTypeController } from "./workflowsOnEventType.controller";
import { WorkflowsOnEventTypeResolver } from "./workflowsOnEventType.resolver";

@Module({
  imports: [WorkflowsOnEventTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkflowsOnEventTypeController],
  providers: [WorkflowsOnEventTypeService, WorkflowsOnEventTypeResolver],
  exports: [WorkflowsOnEventTypeService],
})
export class WorkflowsOnEventTypeModule {}

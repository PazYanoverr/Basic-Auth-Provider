import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DailyEventReferenceModuleBase } from "./base/dailyEventReference.module.base";
import { DailyEventReferenceService } from "./dailyEventReference.service";
import { DailyEventReferenceController } from "./dailyEventReference.controller";
import { DailyEventReferenceResolver } from "./dailyEventReference.resolver";

@Module({
  imports: [DailyEventReferenceModuleBase, forwardRef(() => AuthModule)],
  controllers: [DailyEventReferenceController],
  providers: [DailyEventReferenceService, DailyEventReferenceResolver],
  exports: [DailyEventReferenceService],
})
export class DailyEventReferenceModule {}

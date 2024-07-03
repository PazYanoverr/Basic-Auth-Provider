import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ImpersonationModuleBase } from "./base/impersonation.module.base";
import { ImpersonationService } from "./impersonation.service";
import { ImpersonationController } from "./impersonation.controller";
import { ImpersonationResolver } from "./impersonation.resolver";

@Module({
  imports: [ImpersonationModuleBase, forwardRef(() => AuthModule)],
  controllers: [ImpersonationController],
  providers: [ImpersonationService, ImpersonationResolver],
  exports: [ImpersonationService],
})
export class ImpersonationModule {}

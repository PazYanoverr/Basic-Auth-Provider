import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ResetPasswordRequestModuleBase } from "./base/resetPasswordRequest.module.base";
import { ResetPasswordRequestService } from "./resetPasswordRequest.service";
import { ResetPasswordRequestController } from "./resetPasswordRequest.controller";
import { ResetPasswordRequestResolver } from "./resetPasswordRequest.resolver";

@Module({
  imports: [ResetPasswordRequestModuleBase, forwardRef(() => AuthModule)],
  controllers: [ResetPasswordRequestController],
  providers: [ResetPasswordRequestService, ResetPasswordRequestResolver],
  exports: [ResetPasswordRequestService],
})
export class ResetPasswordRequestModule {}

import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrigUserModuleBase } from "./base/origUser.module.base";
import { OrigUserService } from "./origUser.service";
import { OrigUserController } from "./origUser.controller";
import { OrigUserResolver } from "./origUser.resolver";

@Module({
  imports: [OrigUserModuleBase, forwardRef(() => AuthModule)],
  controllers: [OrigUserController],
  providers: [OrigUserService, OrigUserResolver],
  exports: [OrigUserService],
})
export class OrigUserModule {}

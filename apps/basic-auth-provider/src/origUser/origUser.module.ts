import { Module } from "@nestjs/common";
import { OrigUserModuleBase } from "./base/origUser.module.base";
import { OrigUserService } from "./origUser.service";
import { OrigUserController } from "./origUser.controller";
import { OrigUserResolver } from "./origUser.resolver";

@Module({
  imports: [OrigUserModuleBase],
  controllers: [OrigUserController],
  providers: [OrigUserService, OrigUserResolver],
  exports: [OrigUserService],
})
export class OrigUserModule {}

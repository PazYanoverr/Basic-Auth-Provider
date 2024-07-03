import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HashedLinkModuleBase } from "./base/hashedLink.module.base";
import { HashedLinkService } from "./hashedLink.service";
import { HashedLinkController } from "./hashedLink.controller";
import { HashedLinkResolver } from "./hashedLink.resolver";

@Module({
  imports: [HashedLinkModuleBase, forwardRef(() => AuthModule)],
  controllers: [HashedLinkController],
  providers: [HashedLinkService, HashedLinkResolver],
  exports: [HashedLinkService],
})
export class HashedLinkModule {}

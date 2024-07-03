import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BookingReferenceModuleBase } from "./base/bookingReference.module.base";
import { BookingReferenceService } from "./bookingReference.service";
import { BookingReferenceController } from "./bookingReference.controller";
import { BookingReferenceResolver } from "./bookingReference.resolver";

@Module({
  imports: [BookingReferenceModuleBase, forwardRef(() => AuthModule)],
  controllers: [BookingReferenceController],
  providers: [BookingReferenceService, BookingReferenceResolver],
  exports: [BookingReferenceService],
})
export class BookingReferenceModule {}

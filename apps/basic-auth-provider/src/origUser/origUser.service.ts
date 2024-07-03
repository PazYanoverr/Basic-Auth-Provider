import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrigUserServiceBase } from "./base/origUser.service.base";

@Injectable()
export class OrigUserService extends OrigUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

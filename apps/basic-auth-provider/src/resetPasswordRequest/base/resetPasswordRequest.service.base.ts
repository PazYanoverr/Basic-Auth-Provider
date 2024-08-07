/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ResetPasswordRequest as PrismaResetPasswordRequest,
} from "@prisma/client";

export class ResetPasswordRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ResetPasswordRequestCountArgs, "select">
  ): Promise<number> {
    return this.prisma.resetPasswordRequest.count(args);
  }

  async resetPasswordRequests(
    args: Prisma.ResetPasswordRequestFindManyArgs
  ): Promise<PrismaResetPasswordRequest[]> {
    return this.prisma.resetPasswordRequest.findMany(args);
  }
  async resetPasswordRequest(
    args: Prisma.ResetPasswordRequestFindUniqueArgs
  ): Promise<PrismaResetPasswordRequest | null> {
    return this.prisma.resetPasswordRequest.findUnique(args);
  }
  async createResetPasswordRequest(
    args: Prisma.ResetPasswordRequestCreateArgs
  ): Promise<PrismaResetPasswordRequest> {
    return this.prisma.resetPasswordRequest.create(args);
  }
  async updateResetPasswordRequest(
    args: Prisma.ResetPasswordRequestUpdateArgs
  ): Promise<PrismaResetPasswordRequest> {
    return this.prisma.resetPasswordRequest.update(args);
  }
  async deleteResetPasswordRequest(
    args: Prisma.ResetPasswordRequestDeleteArgs
  ): Promise<PrismaResetPasswordRequest> {
    return this.prisma.resetPasswordRequest.delete(args);
  }
}

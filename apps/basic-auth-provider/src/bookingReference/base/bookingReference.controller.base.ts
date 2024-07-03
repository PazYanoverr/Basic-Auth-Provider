/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { BookingReferenceService } from "../bookingReference.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BookingReferenceCreateInput } from "./BookingReferenceCreateInput";
import { BookingReference } from "./BookingReference";
import { BookingReferenceFindManyArgs } from "./BookingReferenceFindManyArgs";
import { BookingReferenceWhereUniqueInput } from "./BookingReferenceWhereUniqueInput";
import { BookingReferenceUpdateInput } from "./BookingReferenceUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BookingReferenceControllerBase {
  constructor(
    protected readonly service: BookingReferenceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BookingReference })
  @nestAccessControl.UseRoles({
    resource: "BookingReference",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createBookingReference(
    @common.Body() data: BookingReferenceCreateInput
  ): Promise<BookingReference> {
    return await this.service.createBookingReference({
      data: {
        ...data,

        booking: data.booking
          ? {
              connect: data.booking,
            }
          : undefined,
      },
      select: {
        booking: {
          select: {
            id: true,
          },
        },

        deleted: true,
        externalCalendarId: true,
        id: true,
        meetingId: true,
        meetingPassword: true,
        meetingUrl: true,
        typeField: true,
        uid: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [BookingReference] })
  @ApiNestedQuery(BookingReferenceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "BookingReference",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async bookingReferences(
    @common.Req() request: Request
  ): Promise<BookingReference[]> {
    const args = plainToClass(BookingReferenceFindManyArgs, request.query);
    return this.service.bookingReferences({
      ...args,
      select: {
        booking: {
          select: {
            id: true,
          },
        },

        deleted: true,
        externalCalendarId: true,
        id: true,
        meetingId: true,
        meetingPassword: true,
        meetingUrl: true,
        typeField: true,
        uid: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BookingReference })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "BookingReference",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async bookingReference(
    @common.Param() params: BookingReferenceWhereUniqueInput
  ): Promise<BookingReference | null> {
    const result = await this.service.bookingReference({
      where: params,
      select: {
        booking: {
          select: {
            id: true,
          },
        },

        deleted: true,
        externalCalendarId: true,
        id: true,
        meetingId: true,
        meetingPassword: true,
        meetingUrl: true,
        typeField: true,
        uid: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: BookingReference })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "BookingReference",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateBookingReference(
    @common.Param() params: BookingReferenceWhereUniqueInput,
    @common.Body() data: BookingReferenceUpdateInput
  ): Promise<BookingReference | null> {
    try {
      return await this.service.updateBookingReference({
        where: params,
        data: {
          ...data,

          booking: data.booking
            ? {
                connect: data.booking,
              }
            : undefined,
        },
        select: {
          booking: {
            select: {
              id: true,
            },
          },

          deleted: true,
          externalCalendarId: true,
          id: true,
          meetingId: true,
          meetingPassword: true,
          meetingUrl: true,
          typeField: true,
          uid: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: BookingReference })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "BookingReference",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteBookingReference(
    @common.Param() params: BookingReferenceWhereUniqueInput
  ): Promise<BookingReference | null> {
    try {
      return await this.service.deleteBookingReference({
        where: params,
        select: {
          booking: {
            select: {
              id: true,
            },
          },

          deleted: true,
          externalCalendarId: true,
          id: true,
          meetingId: true,
          meetingPassword: true,
          meetingUrl: true,
          typeField: true,
          uid: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

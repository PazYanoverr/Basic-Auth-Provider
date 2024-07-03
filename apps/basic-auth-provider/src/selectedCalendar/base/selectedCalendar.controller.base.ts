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
import { SelectedCalendarService } from "../selectedCalendar.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SelectedCalendarCreateInput } from "./SelectedCalendarCreateInput";
import { SelectedCalendar } from "./SelectedCalendar";
import { SelectedCalendarFindManyArgs } from "./SelectedCalendarFindManyArgs";
import { SelectedCalendarWhereUniqueInput } from "./SelectedCalendarWhereUniqueInput";
import { SelectedCalendarUpdateInput } from "./SelectedCalendarUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SelectedCalendarControllerBase {
  constructor(
    protected readonly service: SelectedCalendarService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SelectedCalendar })
  @nestAccessControl.UseRoles({
    resource: "SelectedCalendar",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSelectedCalendar(
    @common.Body() data: SelectedCalendarCreateInput
  ): Promise<SelectedCalendar> {
    return await this.service.createSelectedCalendar({
      data: {
        ...data,

        user: {
          connect: data.user,
        },
      },
      select: {
        externalId: true,
        id: true,
        integration: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SelectedCalendar] })
  @ApiNestedQuery(SelectedCalendarFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SelectedCalendar",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async selectedCalendars(
    @common.Req() request: Request
  ): Promise<SelectedCalendar[]> {
    const args = plainToClass(SelectedCalendarFindManyArgs, request.query);
    return this.service.selectedCalendars({
      ...args,
      select: {
        externalId: true,
        id: true,
        integration: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SelectedCalendar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SelectedCalendar",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async selectedCalendar(
    @common.Param() params: SelectedCalendarWhereUniqueInput
  ): Promise<SelectedCalendar | null> {
    const result = await this.service.selectedCalendar({
      where: params,
      select: {
        externalId: true,
        id: true,
        integration: true,

        user: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: SelectedCalendar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SelectedCalendar",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSelectedCalendar(
    @common.Param() params: SelectedCalendarWhereUniqueInput,
    @common.Body() data: SelectedCalendarUpdateInput
  ): Promise<SelectedCalendar | null> {
    try {
      return await this.service.updateSelectedCalendar({
        where: params,
        data: {
          ...data,

          user: {
            connect: data.user,
          },
        },
        select: {
          externalId: true,
          id: true,
          integration: true,

          user: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: SelectedCalendar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SelectedCalendar",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSelectedCalendar(
    @common.Param() params: SelectedCalendarWhereUniqueInput
  ): Promise<SelectedCalendar | null> {
    try {
      return await this.service.deleteSelectedCalendar({
        where: params,
        select: {
          externalId: true,
          id: true,
          integration: true,

          user: {
            select: {
              id: true,
            },
          },
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

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
import { EventTypeService } from "../eventType.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EventTypeCreateInput } from "./EventTypeCreateInput";
import { EventType } from "./EventType";
import { EventTypeFindManyArgs } from "./EventTypeFindManyArgs";
import { EventTypeWhereUniqueInput } from "./EventTypeWhereUniqueInput";
import { EventTypeUpdateInput } from "./EventTypeUpdateInput";
import { AvailabilityFindManyArgs } from "../../availability/base/AvailabilityFindManyArgs";
import { Availability } from "../../availability/base/Availability";
import { AvailabilityWhereUniqueInput } from "../../availability/base/AvailabilityWhereUniqueInput";
import { BookingFindManyArgs } from "../../booking/base/BookingFindManyArgs";
import { Booking } from "../../booking/base/Booking";
import { BookingWhereUniqueInput } from "../../booking/base/BookingWhereUniqueInput";
import { EventTypeCustomInputFindManyArgs } from "../../eventTypeCustomInput/base/EventTypeCustomInputFindManyArgs";
import { EventTypeCustomInput } from "../../eventTypeCustomInput/base/EventTypeCustomInput";
import { EventTypeCustomInputWhereUniqueInput } from "../../eventTypeCustomInput/base/EventTypeCustomInputWhereUniqueInput";
import { OrigUserFindManyArgs } from "../../origUser/base/OrigUserFindManyArgs";
import { OrigUser } from "../../origUser/base/OrigUser";
import { OrigUserWhereUniqueInput } from "../../origUser/base/OrigUserWhereUniqueInput";
import { WebhookFindManyArgs } from "../../webhook/base/WebhookFindManyArgs";
import { Webhook } from "../../webhook/base/Webhook";
import { WebhookWhereUniqueInput } from "../../webhook/base/WebhookWhereUniqueInput";
import { WorkflowsOnEventTypeFindManyArgs } from "../../workflowsOnEventType/base/WorkflowsOnEventTypeFindManyArgs";
import { WorkflowsOnEventType } from "../../workflowsOnEventType/base/WorkflowsOnEventType";
import { WorkflowsOnEventTypeWhereUniqueInput } from "../../workflowsOnEventType/base/WorkflowsOnEventTypeWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EventTypeControllerBase {
  constructor(
    protected readonly service: EventTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EventType })
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createEventType(
    @common.Body() data: EventTypeCreateInput
  ): Promise<EventType> {
    return await this.service.createEventType({
      data: {
        ...data,

        destinationCalendar: data.destinationCalendar
          ? {
              connect: data.destinationCalendar,
            }
          : undefined,

        hashedLink: data.hashedLink
          ? {
              connect: data.hashedLink,
            }
          : undefined,

        schedule: data.schedule
          ? {
              connect: data.schedule,
            }
          : undefined,

        team: data.team
          ? {
              connect: data.team,
            }
          : undefined,
      },
      select: {
        afterEventBuffer: true,
        beforeEventBuffer: true,
        currency: true,
        description: true,

        destinationCalendar: {
          select: {
            id: true,
          },
        },

        disableGuests: true,
        eventName: true,

        hashedLink: {
          select: {
            id: true,
          },
        },

        hidden: true,
        hideCalendarNotes: true,
        id: true,
        length: true,
        locations: true,
        metadata: true,
        minimumBookingNotice: true,
        periodCountCalendarDays: true,
        periodDays: true,
        periodEndDate: true,
        periodStartDate: true,
        periodType: true,
        position: true,
        price: true,
        recurringEvent: true,
        requiresConfirmation: true,

        schedule: {
          select: {
            id: true,
          },
        },

        schedulingType: true,
        seatsPerTimeSlot: true,
        slotInterval: true,
        slug: true,
        successRedirectUrl: true,

        team: {
          select: {
            id: true,
          },
        },

        timeZone: true,
        title: true,
        userId: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [EventType] })
  @ApiNestedQuery(EventTypeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async eventTypes(@common.Req() request: Request): Promise<EventType[]> {
    const args = plainToClass(EventTypeFindManyArgs, request.query);
    return this.service.eventTypes({
      ...args,
      select: {
        afterEventBuffer: true,
        beforeEventBuffer: true,
        currency: true,
        description: true,

        destinationCalendar: {
          select: {
            id: true,
          },
        },

        disableGuests: true,
        eventName: true,

        hashedLink: {
          select: {
            id: true,
          },
        },

        hidden: true,
        hideCalendarNotes: true,
        id: true,
        length: true,
        locations: true,
        metadata: true,
        minimumBookingNotice: true,
        periodCountCalendarDays: true,
        periodDays: true,
        periodEndDate: true,
        periodStartDate: true,
        periodType: true,
        position: true,
        price: true,
        recurringEvent: true,
        requiresConfirmation: true,

        schedule: {
          select: {
            id: true,
          },
        },

        schedulingType: true,
        seatsPerTimeSlot: true,
        slotInterval: true,
        slug: true,
        successRedirectUrl: true,

        team: {
          select: {
            id: true,
          },
        },

        timeZone: true,
        title: true,
        userId: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EventType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async eventType(
    @common.Param() params: EventTypeWhereUniqueInput
  ): Promise<EventType | null> {
    const result = await this.service.eventType({
      where: params,
      select: {
        afterEventBuffer: true,
        beforeEventBuffer: true,
        currency: true,
        description: true,

        destinationCalendar: {
          select: {
            id: true,
          },
        },

        disableGuests: true,
        eventName: true,

        hashedLink: {
          select: {
            id: true,
          },
        },

        hidden: true,
        hideCalendarNotes: true,
        id: true,
        length: true,
        locations: true,
        metadata: true,
        minimumBookingNotice: true,
        periodCountCalendarDays: true,
        periodDays: true,
        periodEndDate: true,
        periodStartDate: true,
        periodType: true,
        position: true,
        price: true,
        recurringEvent: true,
        requiresConfirmation: true,

        schedule: {
          select: {
            id: true,
          },
        },

        schedulingType: true,
        seatsPerTimeSlot: true,
        slotInterval: true,
        slug: true,
        successRedirectUrl: true,

        team: {
          select: {
            id: true,
          },
        },

        timeZone: true,
        title: true,
        userId: true,
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
  @swagger.ApiOkResponse({ type: EventType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateEventType(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() data: EventTypeUpdateInput
  ): Promise<EventType | null> {
    try {
      return await this.service.updateEventType({
        where: params,
        data: {
          ...data,

          destinationCalendar: data.destinationCalendar
            ? {
                connect: data.destinationCalendar,
              }
            : undefined,

          hashedLink: data.hashedLink
            ? {
                connect: data.hashedLink,
              }
            : undefined,

          schedule: data.schedule
            ? {
                connect: data.schedule,
              }
            : undefined,

          team: data.team
            ? {
                connect: data.team,
              }
            : undefined,
        },
        select: {
          afterEventBuffer: true,
          beforeEventBuffer: true,
          currency: true,
          description: true,

          destinationCalendar: {
            select: {
              id: true,
            },
          },

          disableGuests: true,
          eventName: true,

          hashedLink: {
            select: {
              id: true,
            },
          },

          hidden: true,
          hideCalendarNotes: true,
          id: true,
          length: true,
          locations: true,
          metadata: true,
          minimumBookingNotice: true,
          periodCountCalendarDays: true,
          periodDays: true,
          periodEndDate: true,
          periodStartDate: true,
          periodType: true,
          position: true,
          price: true,
          recurringEvent: true,
          requiresConfirmation: true,

          schedule: {
            select: {
              id: true,
            },
          },

          schedulingType: true,
          seatsPerTimeSlot: true,
          slotInterval: true,
          slug: true,
          successRedirectUrl: true,

          team: {
            select: {
              id: true,
            },
          },

          timeZone: true,
          title: true,
          userId: true,
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
  @swagger.ApiOkResponse({ type: EventType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteEventType(
    @common.Param() params: EventTypeWhereUniqueInput
  ): Promise<EventType | null> {
    try {
      return await this.service.deleteEventType({
        where: params,
        select: {
          afterEventBuffer: true,
          beforeEventBuffer: true,
          currency: true,
          description: true,

          destinationCalendar: {
            select: {
              id: true,
            },
          },

          disableGuests: true,
          eventName: true,

          hashedLink: {
            select: {
              id: true,
            },
          },

          hidden: true,
          hideCalendarNotes: true,
          id: true,
          length: true,
          locations: true,
          metadata: true,
          minimumBookingNotice: true,
          periodCountCalendarDays: true,
          periodDays: true,
          periodEndDate: true,
          periodStartDate: true,
          periodType: true,
          position: true,
          price: true,
          recurringEvent: true,
          requiresConfirmation: true,

          schedule: {
            select: {
              id: true,
            },
          },

          schedulingType: true,
          seatsPerTimeSlot: true,
          slotInterval: true,
          slug: true,
          successRedirectUrl: true,

          team: {
            select: {
              id: true,
            },
          },

          timeZone: true,
          title: true,
          userId: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/availability")
  @ApiNestedQuery(AvailabilityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Availability",
    action: "read",
    possession: "any",
  })
  async findAvailability(
    @common.Req() request: Request,
    @common.Param() params: EventTypeWhereUniqueInput
  ): Promise<Availability[]> {
    const query = plainToClass(AvailabilityFindManyArgs, request.query);
    const results = await this.service.findAvailability(params.id, {
      ...query,
      select: {
        date: true,
        days: true,
        endTime: true,

        eventType: {
          select: {
            id: true,
          },
        },

        id: true,

        schedule: {
          select: {
            id: true,
          },
        },

        startTime: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/availability")
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "update",
    possession: "any",
  })
  async connectAvailability(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: AvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      availability: {
        connect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/availability")
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "update",
    possession: "any",
  })
  async updateAvailability(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: AvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      availability: {
        set: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/availability")
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "update",
    possession: "any",
  })
  async disconnectAvailability(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: AvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      availability: {
        disconnect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/bookings")
  @ApiNestedQuery(BookingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "read",
    possession: "any",
  })
  async findBookings(
    @common.Req() request: Request,
    @common.Param() params: EventTypeWhereUniqueInput
  ): Promise<Booking[]> {
    const query = plainToClass(BookingFindManyArgs, request.query);
    const results = await this.service.findBookings(params.id, {
      ...query,
      select: {
        cancellationReason: true,
        createdAt: true,
        customInputs: true,

        dailyRef: {
          select: {
            id: true,
          },
        },

        description: true,

        destinationCalendar: {
          select: {
            id: true,
          },
        },

        dynamicEventSlugRef: true,
        dynamicGroupSlugRef: true,
        endTime: true,

        eventType: {
          select: {
            id: true,
          },
        },

        fromReschedule: true,
        id: true,
        location: true,
        paid: true,
        recurringEventId: true,
        rejectionReason: true,
        rescheduled: true,
        smsReminderNumber: true,
        startTime: true,
        status: true,
        title: true,
        uid: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/bookings")
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "update",
    possession: "any",
  })
  async connectBookings(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        connect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/bookings")
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "update",
    possession: "any",
  })
  async updateBookings(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        set: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/bookings")
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "update",
    possession: "any",
  })
  async disconnectBookings(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        disconnect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/customInputs")
  @ApiNestedQuery(EventTypeCustomInputFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "EventTypeCustomInput",
    action: "read",
    possession: "any",
  })
  async findCustomInputs(
    @common.Req() request: Request,
    @common.Param() params: EventTypeWhereUniqueInput
  ): Promise<EventTypeCustomInput[]> {
    const query = plainToClass(EventTypeCustomInputFindManyArgs, request.query);
    const results = await this.service.findCustomInputs(params.id, {
      ...query,
      select: {
        eventType: {
          select: {
            id: true,
          },
        },

        id: true,
        label: true,
        placeholder: true,
        required: true,
        type: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/customInputs")
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "update",
    possession: "any",
  })
  async connectCustomInputs(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: EventTypeCustomInputWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customInputs: {
        connect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/customInputs")
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "update",
    possession: "any",
  })
  async updateCustomInputs(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: EventTypeCustomInputWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customInputs: {
        set: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/customInputs")
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "update",
    possession: "any",
  })
  async disconnectCustomInputs(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: EventTypeCustomInputWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customInputs: {
        disconnect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/users")
  @ApiNestedQuery(OrigUserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "OrigUser",
    action: "read",
    possession: "any",
  })
  async findUsers(
    @common.Req() request: Request,
    @common.Param() params: EventTypeWhereUniqueInput
  ): Promise<OrigUser[]> {
    const query = plainToClass(OrigUserFindManyArgs, request.query);
    const results = await this.service.findUsers(params.id, {
      ...query,
      select: {
        allowDynamicBooking: true,
        avatar: true,
        away: true,
        bio: true,
        brandColor: true,
        bufferTime: true,
        completedOnboarding: true,
        createdDate: true,
        darkBrandColor: true,
        defaultScheduleId: true,

        destinationCalendar: {
          select: {
            id: true,
          },
        },

        disableImpersonation: true,
        email: true,
        emailVerified: true,
        endTime: true,
        hideBranding: true,
        id: true,
        identityProvider: true,
        identityProviderId: true,
        invitedTo: true,
        locale: true,
        metadata: true,
        name: true,
        password: true,
        plan: true,
        role: true,
        startTime: true,
        theme: true,
        timeFormat: true,
        timeZone: true,
        trialEndsAt: true,
        twoFactorEnabled: true,
        twoFactorSecret: true,
        username: true,
        verified: true,
        weekStart: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "update",
    possession: "any",
  })
  async connectUsers(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: OrigUserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        connect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "update",
    possession: "any",
  })
  async updateUsers(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: OrigUserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        set: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "update",
    possession: "any",
  })
  async disconnectUsers(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: OrigUserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        disconnect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/webhooks")
  @ApiNestedQuery(WebhookFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Webhook",
    action: "read",
    possession: "any",
  })
  async findWebhooks(
    @common.Req() request: Request,
    @common.Param() params: EventTypeWhereUniqueInput
  ): Promise<Webhook[]> {
    const query = plainToClass(WebhookFindManyArgs, request.query);
    const results = await this.service.findWebhooks(params.id, {
      ...query,
      select: {
        active: true,

        appField: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        eventTriggers: true,

        eventType: {
          select: {
            id: true,
          },
        },

        id: true,
        payloadTemplate: true,
        secret: true,
        subscriberUrl: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/webhooks")
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "update",
    possession: "any",
  })
  async connectWebhooks(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: WebhookWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      webhooks: {
        connect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/webhooks")
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "update",
    possession: "any",
  })
  async updateWebhooks(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: WebhookWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      webhooks: {
        set: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/webhooks")
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "update",
    possession: "any",
  })
  async disconnectWebhooks(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: WebhookWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      webhooks: {
        disconnect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/workflows")
  @ApiNestedQuery(WorkflowsOnEventTypeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WorkflowsOnEventType",
    action: "read",
    possession: "any",
  })
  async findWorkflows(
    @common.Req() request: Request,
    @common.Param() params: EventTypeWhereUniqueInput
  ): Promise<WorkflowsOnEventType[]> {
    const query = plainToClass(WorkflowsOnEventTypeFindManyArgs, request.query);
    const results = await this.service.findWorkflows(params.id, {
      ...query,
      select: {
        eventType: {
          select: {
            id: true,
          },
        },

        id: true,

        workflow: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/workflows")
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "update",
    possession: "any",
  })
  async connectWorkflows(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: WorkflowsOnEventTypeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflows: {
        connect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/workflows")
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "update",
    possession: "any",
  })
  async updateWorkflows(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: WorkflowsOnEventTypeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflows: {
        set: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/workflows")
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "update",
    possession: "any",
  })
  async disconnectWorkflows(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: WorkflowsOnEventTypeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflows: {
        disconnect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }
}

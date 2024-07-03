/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Schedule } from "./Schedule";
import { ScheduleCountArgs } from "./ScheduleCountArgs";
import { ScheduleFindManyArgs } from "./ScheduleFindManyArgs";
import { ScheduleFindUniqueArgs } from "./ScheduleFindUniqueArgs";
import { CreateScheduleArgs } from "./CreateScheduleArgs";
import { UpdateScheduleArgs } from "./UpdateScheduleArgs";
import { DeleteScheduleArgs } from "./DeleteScheduleArgs";
import { AvailabilityFindManyArgs } from "../../availability/base/AvailabilityFindManyArgs";
import { Availability } from "../../availability/base/Availability";
import { EventTypeFindManyArgs } from "../../eventType/base/EventTypeFindManyArgs";
import { EventType } from "../../eventType/base/EventType";
import { OrigUser } from "../../origUser/base/OrigUser";
import { ScheduleService } from "../schedule.service";
@graphql.Resolver(() => Schedule)
export class ScheduleResolverBase {
  constructor(protected readonly service: ScheduleService) {}

  async _schedulesMeta(
    @graphql.Args() args: ScheduleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Schedule])
  async schedules(
    @graphql.Args() args: ScheduleFindManyArgs
  ): Promise<Schedule[]> {
    return this.service.schedules(args);
  }

  @graphql.Query(() => Schedule, { nullable: true })
  async schedule(
    @graphql.Args() args: ScheduleFindUniqueArgs
  ): Promise<Schedule | null> {
    const result = await this.service.schedule(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Schedule)
  async createSchedule(
    @graphql.Args() args: CreateScheduleArgs
  ): Promise<Schedule> {
    return await this.service.createSchedule({
      ...args,
      data: {
        ...args.data,

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @graphql.Mutation(() => Schedule)
  async updateSchedule(
    @graphql.Args() args: UpdateScheduleArgs
  ): Promise<Schedule | null> {
    try {
      return await this.service.updateSchedule({
        ...args,
        data: {
          ...args.data,

          user: {
            connect: args.data.user,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Schedule)
  async deleteSchedule(
    @graphql.Args() args: DeleteScheduleArgs
  ): Promise<Schedule | null> {
    try {
      return await this.service.deleteSchedule(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Availability], { name: "availability" })
  async findAvailability(
    @graphql.Parent() parent: Schedule,
    @graphql.Args() args: AvailabilityFindManyArgs
  ): Promise<Availability[]> {
    const results = await this.service.findAvailability(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [EventType], { name: "eventType" })
  async findEventType(
    @graphql.Parent() parent: Schedule,
    @graphql.Args() args: EventTypeFindManyArgs
  ): Promise<EventType[]> {
    const results = await this.service.findEventType(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => OrigUser, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Schedule): Promise<OrigUser | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

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
import { Impersonation } from "./Impersonation";
import { ImpersonationCountArgs } from "./ImpersonationCountArgs";
import { ImpersonationFindManyArgs } from "./ImpersonationFindManyArgs";
import { ImpersonationFindUniqueArgs } from "./ImpersonationFindUniqueArgs";
import { CreateImpersonationArgs } from "./CreateImpersonationArgs";
import { UpdateImpersonationArgs } from "./UpdateImpersonationArgs";
import { DeleteImpersonationArgs } from "./DeleteImpersonationArgs";
import { OrigUser } from "../../origUser/base/OrigUser";
import { ImpersonationService } from "../impersonation.service";
@graphql.Resolver(() => Impersonation)
export class ImpersonationResolverBase {
  constructor(protected readonly service: ImpersonationService) {}

  async _impersonationsMeta(
    @graphql.Args() args: ImpersonationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Impersonation])
  async impersonations(
    @graphql.Args() args: ImpersonationFindManyArgs
  ): Promise<Impersonation[]> {
    return this.service.impersonations(args);
  }

  @graphql.Query(() => Impersonation, { nullable: true })
  async impersonation(
    @graphql.Args() args: ImpersonationFindUniqueArgs
  ): Promise<Impersonation | null> {
    const result = await this.service.impersonation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Impersonation)
  async createImpersonation(
    @graphql.Args() args: CreateImpersonationArgs
  ): Promise<Impersonation> {
    return await this.service.createImpersonation({
      ...args,
      data: {
        ...args.data,

        impersonatedBy: {
          connect: args.data.impersonatedBy,
        },

        impersonatedUser: {
          connect: args.data.impersonatedUser,
        },
      },
    });
  }

  @graphql.Mutation(() => Impersonation)
  async updateImpersonation(
    @graphql.Args() args: UpdateImpersonationArgs
  ): Promise<Impersonation | null> {
    try {
      return await this.service.updateImpersonation({
        ...args,
        data: {
          ...args.data,

          impersonatedBy: {
            connect: args.data.impersonatedBy,
          },

          impersonatedUser: {
            connect: args.data.impersonatedUser,
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

  @graphql.Mutation(() => Impersonation)
  async deleteImpersonation(
    @graphql.Args() args: DeleteImpersonationArgs
  ): Promise<Impersonation | null> {
    try {
      return await this.service.deleteImpersonation(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => OrigUser, {
    nullable: true,
    name: "impersonatedBy",
  })
  async getImpersonatedBy(
    @graphql.Parent() parent: Impersonation
  ): Promise<OrigUser | null> {
    const result = await this.service.getImpersonatedBy(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => OrigUser, {
    nullable: true,
    name: "impersonatedUser",
  })
  async getImpersonatedUser(
    @graphql.Parent() parent: Impersonation
  ): Promise<OrigUser | null> {
    const result = await this.service.getImpersonatedUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

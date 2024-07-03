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
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { ApiKey } from "./ApiKey";
import { ApiKeyCountArgs } from "./ApiKeyCountArgs";
import { ApiKeyFindManyArgs } from "./ApiKeyFindManyArgs";
import { ApiKeyFindUniqueArgs } from "./ApiKeyFindUniqueArgs";
import { CreateApiKeyArgs } from "./CreateApiKeyArgs";
import { UpdateApiKeyArgs } from "./UpdateApiKeyArgs";
import { DeleteApiKeyArgs } from "./DeleteApiKeyArgs";
import { AppModel } from "../../appModel/base/AppModel";
import { OrigUser } from "../../origUser/base/OrigUser";
import { ApiKeyService } from "../apiKey.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApiKey)
export class ApiKeyResolverBase {
  constructor(
    protected readonly service: ApiKeyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ApiKey",
    action: "read",
    possession: "any",
  })
  async _apiKeysMeta(
    @graphql.Args() args: ApiKeyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ApiKey])
  @nestAccessControl.UseRoles({
    resource: "ApiKey",
    action: "read",
    possession: "any",
  })
  async apiKeys(@graphql.Args() args: ApiKeyFindManyArgs): Promise<ApiKey[]> {
    return this.service.apiKeys(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ApiKey, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ApiKey",
    action: "read",
    possession: "own",
  })
  async apiKey(
    @graphql.Args() args: ApiKeyFindUniqueArgs
  ): Promise<ApiKey | null> {
    const result = await this.service.apiKey(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ApiKey)
  @nestAccessControl.UseRoles({
    resource: "ApiKey",
    action: "create",
    possession: "any",
  })
  async createApiKey(@graphql.Args() args: CreateApiKeyArgs): Promise<ApiKey> {
    return await this.service.createApiKey({
      ...args,
      data: {
        ...args.data,

        appField: args.data.appField
          ? {
              connect: args.data.appField,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ApiKey)
  @nestAccessControl.UseRoles({
    resource: "ApiKey",
    action: "update",
    possession: "any",
  })
  async updateApiKey(
    @graphql.Args() args: UpdateApiKeyArgs
  ): Promise<ApiKey | null> {
    try {
      return await this.service.updateApiKey({
        ...args,
        data: {
          ...args.data,

          appField: args.data.appField
            ? {
                connect: args.data.appField,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
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

  @graphql.Mutation(() => ApiKey)
  @nestAccessControl.UseRoles({
    resource: "ApiKey",
    action: "delete",
    possession: "any",
  })
  async deleteApiKey(
    @graphql.Args() args: DeleteApiKeyArgs
  ): Promise<ApiKey | null> {
    try {
      return await this.service.deleteApiKey(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => AppModel, {
    nullable: true,
    name: "appField",
  })
  @nestAccessControl.UseRoles({
    resource: "AppModel",
    action: "read",
    possession: "any",
  })
  async getAppField(
    @graphql.Parent() parent: ApiKey
  ): Promise<AppModel | null> {
    const result = await this.service.getAppField(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => OrigUser, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "OrigUser",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: ApiKey): Promise<OrigUser | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

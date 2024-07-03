import * as graphql from "@nestjs/graphql";
import { OrigUserResolverBase } from "./base/origUser.resolver.base";
import { OrigUser } from "./base/OrigUser";
import { OrigUserService } from "./origUser.service";

@graphql.Resolver(() => OrigUser)
export class OrigUserResolver extends OrigUserResolverBase {
  constructor(protected readonly service: OrigUserService) {
    super(service);
  }
}

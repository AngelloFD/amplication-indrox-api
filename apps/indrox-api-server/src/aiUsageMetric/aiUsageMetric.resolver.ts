import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AiUsageMetricResolverBase } from "./base/aiUsageMetric.resolver.base";
import { AiUsageMetric } from "./base/AiUsageMetric";
import { AiUsageMetricService } from "./aiUsageMetric.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AiUsageMetric)
export class AiUsageMetricResolver extends AiUsageMetricResolverBase {
  constructor(
    protected readonly service: AiUsageMetricService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

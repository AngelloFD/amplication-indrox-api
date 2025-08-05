import * as graphql from "@nestjs/graphql";
import { AiUsageMetricResolverBase } from "./base/aiUsageMetric.resolver.base";
import { AiUsageMetric } from "./base/AiUsageMetric";
import { AiUsageMetricService } from "./aiUsageMetric.service";

@graphql.Resolver(() => AiUsageMetric)
export class AiUsageMetricResolver extends AiUsageMetricResolverBase {
  constructor(protected readonly service: AiUsageMetricService) {
    super(service);
  }
}

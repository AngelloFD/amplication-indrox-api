import { Module } from "@nestjs/common";
import { AiUsageMetricModuleBase } from "./base/aiUsageMetric.module.base";
import { AiUsageMetricService } from "./aiUsageMetric.service";
import { AiUsageMetricController } from "./aiUsageMetric.controller";
import { AiUsageMetricResolver } from "./aiUsageMetric.resolver";

@Module({
  imports: [AiUsageMetricModuleBase],
  controllers: [AiUsageMetricController],
  providers: [AiUsageMetricService, AiUsageMetricResolver],
  exports: [AiUsageMetricService],
})
export class AiUsageMetricModule {}

import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AiUsageMetricModuleBase } from "./base/aiUsageMetric.module.base";
import { AiUsageMetricService } from "./aiUsageMetric.service";
import { AiUsageMetricController } from "./aiUsageMetric.controller";
import { AiUsageMetricResolver } from "./aiUsageMetric.resolver";

@Module({
  imports: [AiUsageMetricModuleBase, forwardRef(() => AuthModule)],
  controllers: [AiUsageMetricController],
  providers: [AiUsageMetricService, AiUsageMetricResolver],
  exports: [AiUsageMetricService],
})
export class AiUsageMetricModule {}

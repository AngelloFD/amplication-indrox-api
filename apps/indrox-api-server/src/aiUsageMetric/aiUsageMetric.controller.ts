import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AiUsageMetricService } from "./aiUsageMetric.service";
import { AiUsageMetricControllerBase } from "./base/aiUsageMetric.controller.base";

@swagger.ApiTags("aiUsageMetrics")
@common.Controller("aiUsageMetrics")
export class AiUsageMetricController extends AiUsageMetricControllerBase {
  constructor(
    protected readonly service: AiUsageMetricService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

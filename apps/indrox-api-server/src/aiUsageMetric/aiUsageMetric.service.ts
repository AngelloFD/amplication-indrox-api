import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AiUsageMetricServiceBase } from "./base/aiUsageMetric.service.base";

@Injectable()
export class AiUsageMetricService extends AiUsageMetricServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

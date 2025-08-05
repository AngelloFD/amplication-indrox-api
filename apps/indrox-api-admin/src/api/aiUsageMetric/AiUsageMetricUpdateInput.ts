import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type AiUsageMetricUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  cost?: number | null;
  messageCount?: number | null;
  service?: ServiceWhereUniqueInput | null;
  serviceType?: string | null;
  tokenConsumption?: number | null;
  usageDate?: Date | null;
};

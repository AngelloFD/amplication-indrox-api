import { AiUsageMetricWhereInput } from "./AiUsageMetricWhereInput";
import { AiUsageMetricOrderByInput } from "./AiUsageMetricOrderByInput";

export type AiUsageMetricFindManyArgs = {
  where?: AiUsageMetricWhereInput;
  orderBy?: Array<AiUsageMetricOrderByInput>;
  skip?: number;
  take?: number;
};

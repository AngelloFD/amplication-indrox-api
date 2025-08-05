import { AiUsageMetric as TAiUsageMetric } from "../api/aiUsageMetric/AiUsageMetric";

export const AIUSAGEMETRIC_TITLE_FIELD = "serviceType";

export const AiUsageMetricTitle = (record: TAiUsageMetric): string => {
  return record.serviceType?.toString() || String(record.id);
};

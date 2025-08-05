import { SortOrder } from "../../util/SortOrder";

export type AiUsageMetricOrderByInput = {
  clientId?: SortOrder;
  cost?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  messageCount?: SortOrder;
  serviceId?: SortOrder;
  serviceType?: SortOrder;
  tokenConsumption?: SortOrder;
  updatedAt?: SortOrder;
  usageDate?: SortOrder;
};

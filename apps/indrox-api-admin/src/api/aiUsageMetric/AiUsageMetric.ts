import { Client } from "../client/Client";
import { Service } from "../service/Service";

export type AiUsageMetric = {
  client?: Client | null;
  cost: number | null;
  createdAt: Date;
  id: string;
  messageCount: number | null;
  service?: Service | null;
  serviceType: string | null;
  tokenConsumption: number | null;
  updatedAt: Date;
  usageDate: Date | null;
};

import { AiUsageMetric } from "../aiUsageMetric/AiUsageMetric";
import { Client } from "../client/Client";
import { Invoice } from "../invoice/Invoice";
import { Project } from "../project/Project";

export type Service = {
  aiUsageMetrics?: Array<AiUsageMetric>;
  basePrice: number | null;
  category?: "Option1" | null;
  clients?: Array<Client>;
  createdAt: Date;
  deliveryTimeline: string | null;
  description: string | null;
  duration: number | null;
  id: string;
  invoices?: Array<Invoice>;
  projects?: Array<Project>;
  serviceName: string | null;
  updatedAt: Date;
};

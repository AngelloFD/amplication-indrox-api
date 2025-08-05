import { AiUsageMetricUpdateManyWithoutServicesInput } from "./AiUsageMetricUpdateManyWithoutServicesInput";
import { ClientUpdateManyWithoutServicesInput } from "./ClientUpdateManyWithoutServicesInput";
import { InvoiceUpdateManyWithoutServicesInput } from "./InvoiceUpdateManyWithoutServicesInput";
import { ProjectUpdateManyWithoutServicesInput } from "./ProjectUpdateManyWithoutServicesInput";

export type ServiceUpdateInput = {
  aiUsageMetrics?: AiUsageMetricUpdateManyWithoutServicesInput;
  basePrice?: number | null;
  category?: "Option1" | null;
  clients?: ClientUpdateManyWithoutServicesInput;
  deliveryTimeline?: string | null;
  description?: string | null;
  duration?: number | null;
  invoices?: InvoiceUpdateManyWithoutServicesInput;
  projects?: ProjectUpdateManyWithoutServicesInput;
  serviceName?: string | null;
};

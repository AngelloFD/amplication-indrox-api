import { AiUsageMetricCreateNestedManyWithoutServicesInput } from "./AiUsageMetricCreateNestedManyWithoutServicesInput";
import { ClientCreateNestedManyWithoutServicesInput } from "./ClientCreateNestedManyWithoutServicesInput";
import { InvoiceCreateNestedManyWithoutServicesInput } from "./InvoiceCreateNestedManyWithoutServicesInput";
import { ProjectCreateNestedManyWithoutServicesInput } from "./ProjectCreateNestedManyWithoutServicesInput";

export type ServiceCreateInput = {
  aiUsageMetrics?: AiUsageMetricCreateNestedManyWithoutServicesInput;
  basePrice?: number | null;
  category?: "Option1" | null;
  clients?: ClientCreateNestedManyWithoutServicesInput;
  deliveryTimeline?: string | null;
  description?: string | null;
  duration?: number | null;
  invoices?: InvoiceCreateNestedManyWithoutServicesInput;
  projects?: ProjectCreateNestedManyWithoutServicesInput;
  serviceName?: string | null;
};

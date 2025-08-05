import { AiUsageMetricListRelationFilter } from "../aiUsageMetric/AiUsageMetricListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ClientListRelationFilter } from "../client/ClientListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";

export type ServiceWhereInput = {
  aiUsageMetrics?: AiUsageMetricListRelationFilter;
  basePrice?: FloatNullableFilter;
  category?: "Option1";
  clients?: ClientListRelationFilter;
  deliveryTimeline?: StringNullableFilter;
  description?: StringNullableFilter;
  duration?: IntNullableFilter;
  id?: StringFilter;
  invoices?: InvoiceListRelationFilter;
  projects?: ProjectListRelationFilter;
  serviceName?: StringNullableFilter;
};

import { AiUsageMetricListRelationFilter } from "../aiUsageMetric/AiUsageMetricListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";
import { LeadListRelationFilter } from "../lead/LeadListRelationFilter";
import { PasswordListRelationFilter } from "../password/PasswordListRelationFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type ClientWhereInput = {
  aiUsageMetrics?: AiUsageMetricListRelationFilter;
  billingInfo?: JsonFilter;
  clientStatus?: "Option1";
  company?: StringNullableFilter;
  email?: StringNullableFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  invoices?: InvoiceListRelationFilter;
  leads?: LeadListRelationFilter;
  passwords?: PasswordListRelationFilter;
  paymentMethods?: JsonFilter;
  phone?: StringNullableFilter;
  portalCredentials?: JsonFilter;
  projects?: ProjectListRelationFilter;
  service?: ServiceWhereUniqueInput;
};

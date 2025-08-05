import { AiUsageMetricUpdateManyWithoutClientsInput } from "./AiUsageMetricUpdateManyWithoutClientsInput";
import { InputJsonValue } from "../../types";
import { InvoiceUpdateManyWithoutClientsInput } from "./InvoiceUpdateManyWithoutClientsInput";
import { LeadUpdateManyWithoutClientsInput } from "./LeadUpdateManyWithoutClientsInput";
import { PasswordUpdateManyWithoutClientsInput } from "./PasswordUpdateManyWithoutClientsInput";
import { ProjectUpdateManyWithoutClientsInput } from "./ProjectUpdateManyWithoutClientsInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type ClientUpdateInput = {
  aiUsageMetrics?: AiUsageMetricUpdateManyWithoutClientsInput;
  billingInfo?: InputJsonValue;
  clientStatus?: "Option1" | null;
  company?: string | null;
  email?: string | null;
  fullName?: string | null;
  invoices?: InvoiceUpdateManyWithoutClientsInput;
  leads?: LeadUpdateManyWithoutClientsInput;
  passwords?: PasswordUpdateManyWithoutClientsInput;
  paymentMethods?: InputJsonValue;
  phone?: string | null;
  portalCredentials?: InputJsonValue;
  projects?: ProjectUpdateManyWithoutClientsInput;
  service?: ServiceWhereUniqueInput | null;
};

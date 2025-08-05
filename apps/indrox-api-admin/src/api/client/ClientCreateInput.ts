import { AiUsageMetricCreateNestedManyWithoutClientsInput } from "./AiUsageMetricCreateNestedManyWithoutClientsInput";
import { InputJsonValue } from "../../types";
import { InvoiceCreateNestedManyWithoutClientsInput } from "./InvoiceCreateNestedManyWithoutClientsInput";
import { LeadCreateNestedManyWithoutClientsInput } from "./LeadCreateNestedManyWithoutClientsInput";
import { PasswordCreateNestedManyWithoutClientsInput } from "./PasswordCreateNestedManyWithoutClientsInput";
import { ProjectCreateNestedManyWithoutClientsInput } from "./ProjectCreateNestedManyWithoutClientsInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type ClientCreateInput = {
  aiUsageMetrics?: AiUsageMetricCreateNestedManyWithoutClientsInput;
  billingInfo?: InputJsonValue;
  clientStatus?: "Option1" | null;
  company?: string | null;
  email?: string | null;
  fullName?: string | null;
  invoices?: InvoiceCreateNestedManyWithoutClientsInput;
  leads?: LeadCreateNestedManyWithoutClientsInput;
  passwords?: PasswordCreateNestedManyWithoutClientsInput;
  paymentMethods?: InputJsonValue;
  phone?: string | null;
  portalCredentials?: InputJsonValue;
  projects?: ProjectCreateNestedManyWithoutClientsInput;
  service?: ServiceWhereUniqueInput | null;
};

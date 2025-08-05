import { AiUsageMetric } from "../aiUsageMetric/AiUsageMetric";
import { JsonValue } from "type-fest";
import { Invoice } from "../invoice/Invoice";
import { Lead } from "../lead/Lead";
import { Password } from "../password/Password";
import { Project } from "../project/Project";
import { Service } from "../service/Service";

export type Client = {
  aiUsageMetrics?: Array<AiUsageMetric>;
  billingInfo: JsonValue;
  clientStatus?: "Option1" | null;
  company: string | null;
  createdAt: Date;
  email: string | null;
  fullName: string | null;
  id: string;
  invoices?: Array<Invoice>;
  leads?: Array<Lead>;
  passwords?: Array<Password>;
  paymentMethods: JsonValue;
  phone: string | null;
  portalCredentials: JsonValue;
  projects?: Array<Project>;
  service?: Service | null;
  updatedAt: Date;
};

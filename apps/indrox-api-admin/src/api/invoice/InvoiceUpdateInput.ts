import { InputJsonValue } from "../../types";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type InvoiceUpdateInput = {
  amount?: number | null;
  attachments?: InputJsonValue;
  client?: ClientWhereUniqueInput | null;
  dueDate?: Date | null;
  generatedAt?: Date | null;
  invoiceType?: "Option1" | null;
  paymentHistory?: InputJsonValue;
  paymentStatus?: "Option1" | null;
  paymentTerms?: string | null;
  project?: ProjectWhereUniqueInput | null;
  service?: ServiceWhereUniqueInput | null;
  tax?: number | null;
};

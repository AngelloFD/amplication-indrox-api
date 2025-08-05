import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type InvoiceWhereInput = {
  amount?: FloatNullableFilter;
  attachments?: JsonFilter;
  client?: ClientWhereUniqueInput;
  dueDate?: DateTimeNullableFilter;
  generatedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  invoiceType?: "Option1";
  paymentHistory?: JsonFilter;
  paymentStatus?: "Option1";
  paymentTerms?: StringNullableFilter;
  project?: ProjectWhereUniqueInput;
  service?: ServiceWhereUniqueInput;
  tax?: FloatNullableFilter;
};

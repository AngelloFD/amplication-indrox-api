import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PasswordListRelationFilter } from "../password/PasswordListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type ProjectWhereInput = {
  client?: ClientWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  invoices?: InvoiceListRelationFilter;
  monthlyAmountDue?: FloatNullableFilter;
  name?: StringNullableFilter;
  passwords?: PasswordListRelationFilter;
  paymentSchedule?: JsonFilter;
  progress?: StringNullableFilter;
  service?: ServiceWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
  status?: "Option1";
  totalPrice?: FloatNullableFilter;
};

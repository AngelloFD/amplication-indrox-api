import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { InvoiceUpdateManyWithoutProjectsInput } from "./InvoiceUpdateManyWithoutProjectsInput";
import { PasswordUpdateManyWithoutProjectsInput } from "./PasswordUpdateManyWithoutProjectsInput";
import { InputJsonValue } from "../../types";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type ProjectUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  endDate?: Date | null;
  invoices?: InvoiceUpdateManyWithoutProjectsInput;
  monthlyAmountDue?: number | null;
  name?: string | null;
  passwords?: PasswordUpdateManyWithoutProjectsInput;
  paymentSchedule?: InputJsonValue;
  progress?: string | null;
  service?: ServiceWhereUniqueInput | null;
  startDate?: Date | null;
  status?: "Option1" | null;
  totalPrice?: number | null;
};

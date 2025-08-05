import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { InvoiceCreateNestedManyWithoutProjectsInput } from "./InvoiceCreateNestedManyWithoutProjectsInput";
import { PasswordCreateNestedManyWithoutProjectsInput } from "./PasswordCreateNestedManyWithoutProjectsInput";
import { InputJsonValue } from "../../types";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type ProjectCreateInput = {
  client?: ClientWhereUniqueInput | null;
  endDate?: Date | null;
  invoices?: InvoiceCreateNestedManyWithoutProjectsInput;
  monthlyAmountDue?: number | null;
  name?: string | null;
  passwords?: PasswordCreateNestedManyWithoutProjectsInput;
  paymentSchedule?: InputJsonValue;
  progress?: string | null;
  service?: ServiceWhereUniqueInput | null;
  startDate?: Date | null;
  status?: "Option1" | null;
  totalPrice?: number | null;
};

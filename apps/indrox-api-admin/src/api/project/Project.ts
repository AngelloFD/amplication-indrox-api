import { Client } from "../client/Client";
import { Invoice } from "../invoice/Invoice";
import { Password } from "../password/Password";
import { JsonValue } from "type-fest";
import { Service } from "../service/Service";

export type Project = {
  client?: Client | null;
  createdAt: Date;
  endDate: Date | null;
  id: string;
  invoices?: Array<Invoice>;
  monthlyAmountDue: number | null;
  name: string | null;
  passwords?: Array<Password>;
  paymentSchedule: JsonValue;
  progress: string | null;
  service?: Service | null;
  startDate: Date | null;
  status?: "Option1" | null;
  totalPrice: number | null;
  updatedAt: Date;
};

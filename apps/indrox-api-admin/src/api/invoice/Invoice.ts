import { JsonValue } from "type-fest";
import { Client } from "../client/Client";
import { Project } from "../project/Project";
import { Service } from "../service/Service";

export type Invoice = {
  amount: number | null;
  attachments: JsonValue;
  client?: Client | null;
  createdAt: Date;
  dueDate: Date | null;
  generatedAt: Date | null;
  id: string;
  invoiceType?: "Option1" | null;
  paymentHistory: JsonValue;
  paymentStatus?: "Option1" | null;
  paymentTerms: string | null;
  project?: Project | null;
  service?: Service | null;
  tax: number | null;
  updatedAt: Date;
};

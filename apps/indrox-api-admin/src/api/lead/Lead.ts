import { Client } from "../client/Client";

export type Lead = {
  assignedResponsible: string | null;
  client?: Client | null;
  company: string | null;
  createdAt: Date;
  email: string | null;
  estimatedProjectValue: number | null;
  id: string;
  leadStatus?: "Option1" | null;
  leadType?: "Option1" | null;
  name: string | null;
  notes: string | null;
  phone: string | null;
  serviceOfInterest: string | null;
  updatedAt: Date;
};

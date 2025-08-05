import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type LeadUpdateInput = {
  assignedResponsible?: string | null;
  client?: ClientWhereUniqueInput | null;
  company?: string | null;
  email?: string | null;
  estimatedProjectValue?: number | null;
  leadStatus?: "Option1" | null;
  leadType?: "Option1" | null;
  name?: string | null;
  notes?: string | null;
  phone?: string | null;
  serviceOfInterest?: string | null;
};

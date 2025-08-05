import { SortOrder } from "../../util/SortOrder";

export type LeadOrderByInput = {
  assignedResponsible?: SortOrder;
  clientId?: SortOrder;
  company?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  estimatedProjectValue?: SortOrder;
  id?: SortOrder;
  leadStatus?: SortOrder;
  leadType?: SortOrder;
  name?: SortOrder;
  notes?: SortOrder;
  phone?: SortOrder;
  serviceOfInterest?: SortOrder;
  updatedAt?: SortOrder;
};

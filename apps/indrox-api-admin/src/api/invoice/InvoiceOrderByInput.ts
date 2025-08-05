import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  amount?: SortOrder;
  attachments?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  dueDate?: SortOrder;
  generatedAt?: SortOrder;
  id?: SortOrder;
  invoiceType?: SortOrder;
  paymentHistory?: SortOrder;
  paymentStatus?: SortOrder;
  paymentTerms?: SortOrder;
  projectId?: SortOrder;
  serviceId?: SortOrder;
  tax?: SortOrder;
  updatedAt?: SortOrder;
};

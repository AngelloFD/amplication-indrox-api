import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  billingInfo?: SortOrder;
  clientStatus?: SortOrder;
  company?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  paymentMethods?: SortOrder;
  phone?: SortOrder;
  portalCredentials?: SortOrder;
  serviceId?: SortOrder;
  updatedAt?: SortOrder;
};

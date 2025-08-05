import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  monthlyAmountDue?: SortOrder;
  name?: SortOrder;
  paymentSchedule?: SortOrder;
  progress?: SortOrder;
  serviceId?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
};

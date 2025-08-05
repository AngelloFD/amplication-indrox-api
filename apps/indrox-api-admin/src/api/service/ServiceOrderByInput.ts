import { SortOrder } from "../../util/SortOrder";

export type ServiceOrderByInput = {
  basePrice?: SortOrder;
  category?: SortOrder;
  createdAt?: SortOrder;
  deliveryTimeline?: SortOrder;
  description?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  serviceName?: SortOrder;
  updatedAt?: SortOrder;
};

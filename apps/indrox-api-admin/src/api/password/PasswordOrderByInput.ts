import { SortOrder } from "../../util/SortOrder";

export type PasswordOrderByInput = {
  accessPermissions?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  credentials?: SortOrder;
  expirationDate?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  updatedAt?: SortOrder;
  usageAudit?: SortOrder;
};

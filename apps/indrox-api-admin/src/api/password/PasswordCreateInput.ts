import { InputJsonValue } from "../../types";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type PasswordCreateInput = {
  accessPermissions?: InputJsonValue;
  client?: ClientWhereUniqueInput | null;
  credentials?: string | null;
  expirationDate?: Date | null;
  project?: ProjectWhereUniqueInput | null;
  usageAudit?: InputJsonValue;
};

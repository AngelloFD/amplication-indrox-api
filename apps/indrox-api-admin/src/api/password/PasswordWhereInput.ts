import { JsonFilter } from "../../util/JsonFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type PasswordWhereInput = {
  accessPermissions?: JsonFilter;
  client?: ClientWhereUniqueInput;
  credentials?: StringNullableFilter;
  expirationDate?: DateTimeNullableFilter;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  usageAudit?: JsonFilter;
};

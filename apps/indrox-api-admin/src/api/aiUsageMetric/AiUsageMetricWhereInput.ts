import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AiUsageMetricWhereInput = {
  client?: ClientWhereUniqueInput;
  cost?: FloatNullableFilter;
  id?: StringFilter;
  messageCount?: IntNullableFilter;
  service?: ServiceWhereUniqueInput;
  serviceType?: StringNullableFilter;
  tokenConsumption?: IntNullableFilter;
  usageDate?: DateTimeNullableFilter;
};

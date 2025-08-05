import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LeadWhereInput = {
  assignedResponsible?: StringNullableFilter;
  client?: ClientWhereUniqueInput;
  company?: StringNullableFilter;
  email?: StringNullableFilter;
  estimatedProjectValue?: FloatNullableFilter;
  id?: StringFilter;
  leadStatus?: "Option1";
  leadType?: "Option1";
  name?: StringNullableFilter;
  notes?: StringNullableFilter;
  phone?: StringNullableFilter;
  serviceOfInterest?: StringNullableFilter;
};

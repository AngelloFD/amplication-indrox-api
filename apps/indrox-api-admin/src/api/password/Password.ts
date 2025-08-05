import { JsonValue } from "type-fest";
import { Client } from "../client/Client";
import { Project } from "../project/Project";

export type Password = {
  accessPermissions: JsonValue;
  client?: Client | null;
  createdAt: Date;
  credentials: string | null;
  expirationDate: Date | null;
  id: string;
  project?: Project | null;
  updatedAt: Date;
  usageAudit: JsonValue;
};

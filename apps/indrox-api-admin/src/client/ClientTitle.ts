import { Client as TClient } from "../api/client/Client";

export const CLIENT_TITLE_FIELD = "fullName";

export const ClientTitle = (record: TClient): string => {
  return record.fullName?.toString() || String(record.id);
};

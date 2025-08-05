import { Password as TPassword } from "../api/password/Password";

export const PASSWORD_TITLE_FIELD = "id";

export const PasswordTitle = (record: TPassword): string => {
  return record.id?.toString() || String(record.id);
};

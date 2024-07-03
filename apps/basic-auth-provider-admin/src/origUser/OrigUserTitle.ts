import { OrigUser as TOrigUser } from "../api/origUser/OrigUser";

export const ORIGUSER_TITLE_FIELD = "name";

export const OrigUserTitle = (record: TOrigUser): string => {
  return record.name?.toString() || String(record.id);
};

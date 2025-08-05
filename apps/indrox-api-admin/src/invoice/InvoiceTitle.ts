import { Invoice as TInvoice } from "../api/invoice/Invoice";

export const INVOICE_TITLE_FIELD = "paymentTerms";

export const InvoiceTitle = (record: TInvoice): string => {
  return record.paymentTerms?.toString() || String(record.id);
};

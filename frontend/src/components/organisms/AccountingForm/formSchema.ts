import i18n from '@i18n/i18n';
import { z } from 'zod';

export enum TransactionType {
  SENDING = 'sending',
  RECEIVING = 'receiving',
}

export const formSchema = z.object({
  accountNumber: z
    .string()
    .min(
      1,
      i18n.t(
        'recordsTable.form.modalFields.validationSchema.accountNumberRequired',
      ),
    )
    .regex(
      /^\d+$/,
      i18n.t(
        'recordsTable.form.modalFields.validationSchema.accountNumberDigits',
      ),
    ),

  accountName: z
    .string()
    .min(
      1,
      i18n.t(
        'recordsTable.form.modalFields.validationSchema.accountNameRequired',
      ),
    ),

  iban: z
    .string()
    .min(
      32,
      i18n.t('recordsTable.form.modalFields.validationSchema.ibanLength'),
    )
    .regex(
      /^[A-Z]{2}[A-Z0-9]{1,30}$/,
      i18n.t('recordsTable.form.modalFields.validationSchema.ibanFormat'),
    ),

  address: z
    .string()
    .min(
      1,
      i18n.t('recordsTable.form.modalFields.validationSchema.addressRequired'),
    ),

  amount: z
    .number({
      invalid_type_error: i18n.t(
        'recordsTable.form.modalFields.validationSchema.amountNumber',
      ),
    })
    .positive(
      i18n.t('recordsTable.form.modalFields.validationSchema.amountPositive'),
    ),

  type: z.enum(
    [i18n.t(TransactionType.SENDING), i18n.t(TransactionType.RECEIVING)],
    {
      errorMap: () => ({
        message: i18n.t(
          'recordsTable.form.modalFields.validationSchema.typeRequired',
        ),
      }),
    },
  ),
});

export type FormData = z.infer<typeof formSchema>;

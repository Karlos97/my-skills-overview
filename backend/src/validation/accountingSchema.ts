import { z } from "zod";

enum TransactionType {
  SENDING = "sending",
  RECEIVING = "receiving",
}

export const getAccountingSchema = z.object({
  page: z.preprocess(
    (val) => Number(val),
    z.number().min(1).positive("Amount must be a positive number")
  ),
  recordsPerPage: z.preprocess(
    (val) => Number(val),
    z.number().min(1).positive("Amount must be a positive number")
  ),
});

const accountNumberSchema = z
  .string()
  .min(1, "Account Number is required")
  .regex(/^\d+$/, "Account Number must contain only digits");

const accountNameSchema = z.string().min(1, "Account name is required");

const ibanSchema = z
  .string()
  .length(32, "IBAN must be 32 characters long")
  .refine((value) => /^[A-Z]{2}\d{30}$/.test(value), {
    message: "IBAN must start with two uppercase letters followed by 30 digits",
  });

const addressSchema = z.string().min(1, "Address is required");

const amountSchema = z.number().positive("Amount must be a positive number");

const typeSchema = z.enum(
  [TransactionType.SENDING, TransactionType.RECEIVING],
  {
    errorMap: () => ({ message: "Type is required" }),
  }
);

export const postAccountingSchema = z.object({
  accountNumber: accountNumberSchema,
  accountName: accountNameSchema,
  iban: ibanSchema,
  address: addressSchema,
  amount: amountSchema,
  type: typeSchema,
});

export const putAccountingSchema = postAccountingSchema.extend({
  id: z.string().min(1, "Id is required"),
});

export const removeAccountingSchema = z.object({
  id: z.string().min(1, "Id is required"),
});

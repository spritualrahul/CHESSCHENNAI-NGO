import { z } from "zod";

const indianPhonePattern = /^[6-9]\d{9}$/;
const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
const amountPattern = /^\d{1,10}(?:\.\d{1,2})?$/;

function normalizePhone(value: string) {
  const digits = value.replace(/\D/g, "");

  if (digits.length === 12 && digits.startsWith("91")) {
    return digits.slice(2);
  }

  if (digits.length === 11 && digits.startsWith("0")) {
    return digits.slice(1);
  }

  return digits;
}

export function createDonationSchema(panRequired: boolean) {
  return z
    .object({
      name: z
        .string({ error: "Enter your full name." })
        .trim()
        .min(2, "Enter your full name.")
        .max(120, "Name must be 120 characters or fewer.")
        .transform((value) => value.replace(/\s+/g, " ")),
      pan: z
        .string()
        .trim()
        .transform((value) => value.replace(/\s+/g, "").toUpperCase())
        .optional()
        .default(""),
      email: z
        .string({ error: "Enter your email address." })
        .trim()
        .max(254, "Email address is too long.")
        .email("Enter a valid email address.")
        .transform((value) => value.toLowerCase()),
      phone: z
        .string({ error: "Enter your phone number." })
        .trim()
        .transform(normalizePhone)
        .refine((value) => indianPhonePattern.test(value), "Enter a valid 10-digit Indian mobile number."),
      address: z
        .string({ error: "Enter your address." })
        .trim()
        .min(10, "Enter your complete address.")
        .max(500, "Address must be 500 characters or fewer.")
        .transform((value) => value.replace(/[ \t]+/g, " ")),
      amount: z
        .union([z.string(), z.number()])
        .transform((value) => String(value).trim().replace(/,/g, ""))
        .refine((value) => amountPattern.test(value), "Enter a valid amount with up to 2 decimal places.")
        .transform(Number)
        .refine((value) => value > 0, "Donation amount must be greater than zero.")
        .refine((value) => value <= 99_999_999.99, "Donation amount is too large."),
    })
    .superRefine((value, context) => {
      if (panRequired && !value.pan) {
        context.addIssue({
          code: "custom",
          path: ["pan"],
          message: "PAN is required for this donation.",
        });
      }

      if (value.pan && !panPattern.test(value.pan)) {
        context.addIssue({
          code: "custom",
          path: ["pan"],
          message: "Enter a valid PAN, for example ABCDE1234F.",
        });
      }
    });
}

export const adminLoginSchema = z.object({
  email: z.string().trim().email("Enter a valid email address.").max(254),
  password: z.string().min(1, "Enter your password.").max(200),
});

export const donationStatusSchema = z.enum(["PENDING", "PAID", "FAILED"]);

export const adminDonationStatusUpdateSchema = z.object({
  donationId: z.string().trim().min(1).max(32),
  paymentStatus: donationStatusSchema,
});

export type DonationStatus = z.infer<typeof donationStatusSchema>;
export type DonationInput = z.output<ReturnType<typeof createDonationSchema>>;

"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { clearAdminSession, createAdminSession, requireAdmin, verifyAdminCredentials } from "@/lib/auth";
import { updateDonationPaymentStatus } from "@/lib/donations/database";
import { adminDonationStatusUpdateSchema, adminLoginSchema } from "@/lib/donations/schema";

export type LoginState = {
  error: string | null;
  fieldErrors?: {
    email?: string[];
    password?: string[];
  };
};

export async function loginAction(_previousState: LoginState, formData: FormData): Promise<LoginState> {
  const parsed = adminLoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return {
      error: "Please check the highlighted fields.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  let valid = false;

  try {
    valid = await verifyAdminCredentials(parsed.data.email, parsed.data.password);
  } catch {
    return { error: "Admin access has not been configured. Please contact the site administrator." };
  }

  if (!valid) {
    return { error: "The email or password is incorrect." };
  }

  try {
    await createAdminSession(parsed.data.email.toLowerCase());
  } catch {
    return { error: "A secure session could not be created. Please contact the site administrator." };
  }

  redirect("/admin");
}

export async function logoutAction() {
  await clearAdminSession();
  redirect("/admin/login");
}

export async function updateDonationStatusAction(formData: FormData) {
  await requireAdmin();

  const parsed = adminDonationStatusUpdateSchema.safeParse({
    donationId: formData.get("donationId"),
    paymentStatus: formData.get("paymentStatus"),
  });

  if (!parsed.success) {
    throw new Error("Invalid donation status update.");
  }

  const updated = await updateDonationPaymentStatus(parsed.data.donationId, parsed.data.paymentStatus);

  if (!updated) {
    throw new Error("Donation record was not found.");
  }

  revalidatePath("/admin");
  revalidatePath(`/admin/donations/${parsed.data.donationId}`);
  redirect(`/admin/donations/${parsed.data.donationId}`);
}

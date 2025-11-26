"use server";

import {
  getSignInUrl,
  getSignUpUrl,
  signOut,
} from "@workos-inc/authkit-nextjs";
import { redirect } from "next/navigation";

export async function getSignInRedirect() {
  return await getSignInUrl();
}

export async function doSignOut() {
  await signOut({ returnTo: "/" });
}

export async function getSignUpRedirect() {
  const authorizationUrl = await getSignUpUrl();
  return redirect(authorizationUrl);
}

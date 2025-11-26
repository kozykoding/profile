"use server";

import { withAuth } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";
import ProfileWidgetClient from "./ProfileWidgetClient";
import "@radix-ui/themes/styles.css";
import "@workos-inc/widgets/styles.css";
import SecurityWidgetClient from "./SecurityWidgetClient";
import SessionWidgetClient from "./SessionWidgetClient";
import OrgSwitcherWidgetClient from "./OrgSwitcherWidgetClient";
import { cookies } from "next/headers";
import { LoFi } from "@/components/lo-fi/index"

export default async function ProfilePage() {
  const { user, organizationId, sessionId } = await withAuth();

  if (!user?.id) {
    return (
      <div className="p-6">
        <p>You must be signed in to view this page.</p>
      </div>
    );
  }

  if (!organizationId) {
    return (
      <div className="p-6">
        <p>Contact your administrator to get access to this page.</p>
      </div>
    );
  }

  const workos = new WorkOS(process.env.WORKOS_API_KEY, {
    clientId: process.env.WORKOS_CLIENT_ID,
  });

  // Get feature flags using the correct WorkOS approach
  // Access the sealed session cookie from request headers
  const cookieStore = await cookies();
  const sessionData = cookieStore.get("wos-session")?.value;

  let isProfilesEnabled = false;
  let featureFlags: string[] = [];

  // Evaluate feature flags from sealed session cookie per WorkOS docs
  if (sessionData) {
    try {
      const session = workos.userManagement.loadSealedSession({
        cookiePassword: process.env.WORKOS_COOKIE_PASSWORD!,
        sessionData,
      });

      const refreshResponse = await session.refresh();
      // Safely extract string[] feature flags without using 'any'
      const flagsValue = (() => {
        const resp: unknown = refreshResponse;
        if (
          typeof resp === "object" &&
          resp !== null &&
          "featureFlags" in resp
        ) {
          const ff = (resp as Record<string, unknown>).featureFlags;
          if (Array.isArray(ff) && ff.every((v) => typeof v === "string")) {
            return ff as string[];
          }
        }
        return [] as string[];
      })();
      featureFlags = flagsValue;
      isProfilesEnabled = featureFlags.includes("profiles");

      console.log("[Profiles] featureFlags:", featureFlags);
    } catch (err) {
      console.error("[Profiles] session.refresh error:", err);
      isProfilesEnabled = false;
    }
  } else {
    console.warn("[Profiles] Missing sealed session cookie 'wos-session'");
    isProfilesEnabled = false;
  }

  const tokenResponse = await workos.widgets.getToken({
    organizationId,
    userId: user.id,
    scopes: ["widgets:users-table:manage"],
  });

  let authToken: string;
  if (typeof tokenResponse === "string") {
    authToken = tokenResponse;
  } else if (
    tokenResponse &&
    typeof tokenResponse === "object" &&
    "token" in tokenResponse &&
    typeof (tokenResponse as Record<string, unknown>).token === "string"
  ) {
    const maybeToken = (tokenResponse as Record<string, unknown>).token;
    if (typeof maybeToken !== "string") {
      throw new Error(
        "Invalid token field in WorkOS widgets.getToken response",
      );
    }
    authToken = maybeToken;
  } else {
    throw new Error("Invalid token response from WorkOS widgets.getToken");
  }

  const currentSessionId: string | undefined = (() => {
    if (typeof sessionId === "string") return sessionId;
    if (
      sessionId &&
      typeof sessionId === "object" &&
      "id" in sessionId &&
      typeof (sessionId as Record<string, unknown>).id === "string"
    ) {
      return (sessionId as Record<string, string>).id;
    }
    return undefined;
  })();

  // If the profile feature flag is not enabled, show a message
  if (!isProfilesEnabled) {
    return (
      <div className="container mt-4 p-4">
        
        <div className="p-6 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Profile Feature Not Available
          </h2>
          <p className="text-muted-foreground">
            The profile feature is currently not enabled for your account.
            Please contact your administrator if you believe this is an error.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4 p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Your Profile</h1>
      <p className="text-muted-foreground mb-4">
        I'm utilizing WorkOS for authentication. 
        <br />
        I can work with numerous authentication methods, this is just one of the better solutions.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <OrgSwitcherWidgetClient authToken={authToken} />
          <ProfileWidgetClient authToken={authToken} />
        </div>
        {/*<div className="mt-13">
          <SessionWidgetClient
            authToken={authToken}
            currentSessionId={currentSessionId}
          />
        </div>*/}
        <div className="mt-13">
          <SecurityWidgetClient authToken={authToken} />
        </div>
      </div>
    </div>
  );
}

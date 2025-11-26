"use client";
import "@radix-ui/themes/styles.css";
import "@workos-inc/widgets/styles.css";
import { OrganizationSwitcher, WorkOsWidgets } from "@workos-inc/widgets";
import { useAuth } from "@workos-inc/authkit-nextjs/components";
import { usePathname, useRouter } from "next/navigation";

export default function OrgSwitcherWidgetClient({
  authToken,
}: {
  authToken: string;
}) {
  const { getAccessToken, switchToOrganization } = useAuth() as unknown as {
    getAccessToken?: () => Promise<string>;
    switchToOrganization?: (organizationId: string) => Promise<void>;
  };
  const pathname = usePathname();
  const router = useRouter();

  const handleSwitch = async ({
    organizationId,
  }: {
    organizationId: string;
  }) => {
    if (typeof switchToOrganization === "function") {
      await switchToOrganization(organizationId);
      router.replace(pathname);
    }
  };

  return (
    <div className="max-h-10 min-w-sm">
      <WorkOsWidgets
        theme={{
          appearance: "inherit",
          radius: "medium",
          hasBackground: false,
        }}
      >
        <OrganizationSwitcher
          authToken={authToken}
          switchToOrganization={handleSwitch}
        />
      </WorkOsWidgets>
    </div>
  );
}

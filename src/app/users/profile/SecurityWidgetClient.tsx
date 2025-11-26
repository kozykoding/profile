"use client";
import "@radix-ui/themes/styles.css";
import "@workos-inc/widgets/styles.css";
import { UserSecurity, WorkOsWidgets } from "@workos-inc/widgets";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function SecurityWidgetClient({
  authToken,
}: {
  authToken: string;
}) {
  return (
    <WorkOsWidgets
      theme={{
        appearance: "inherit",
        radius: "medium",
        hasBackground: false,
      }}
    >
      <ScrollArea className="h-full w-full overflow-hidden pr-4">
        <div className="max-h-80">
          <UserSecurity authToken={authToken} />
        </div>
        <ScrollBar orientation="vertical" />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </WorkOsWidgets>
  );
}

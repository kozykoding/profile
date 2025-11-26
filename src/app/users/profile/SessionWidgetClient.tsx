"use client";
import "@radix-ui/themes/styles.css";
import "@workos-inc/widgets/styles.css";
import { UserSessions, WorkOsWidgets } from "@workos-inc/widgets";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function SessionWidgetClient({
  authToken,
  currentSessionId,
}: {
  authToken: string;
  currentSessionId?: string;
}) {
  return (
    <WorkOsWidgets
      theme={{
        appearance: "inherit",
        radius: "medium",
        hasBackground: false,
      }}
    >
      <ScrollArea className="h-full w-full overflow-hidden">
        <div className="max-h-90">
          <UserSessions
            authToken={authToken}
            currentSessionId={currentSessionId ?? ""}
          />
        </div>
        <ScrollBar orientation="vertical" />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </WorkOsWidgets>
  );
}

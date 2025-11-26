"use client";
import "@radix-ui/themes/styles.css";
import "@workos-inc/widgets/styles.css";
import { UserProfile, WorkOsWidgets } from "@workos-inc/widgets";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function ProfileWidgetClient({
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
      <ScrollArea className="h-full w-full overflow-hidden">
        <div className="max-h-80">
          <UserProfile authToken={authToken} />
        </div>
        <ScrollBar orientation="vertical" />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </WorkOsWidgets>
  );
}

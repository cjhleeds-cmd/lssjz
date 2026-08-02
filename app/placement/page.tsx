"use client";

import { useSearchParams } from "next/navigation";
import { HistoryApp } from "../page";

export default function PlacementPage() {
  const item = useSearchParams().get("item") ?? undefined;
  const initialPlacementItemKey = item?.startsWith("event:") || item?.startsWith("figure:") ? item : undefined;
  return <HistoryApp view="placement" initialPlacementItemKey={initialPlacementItemKey} />;
}

"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/context/LanguageContext";

interface StatusBadgeProps {
  status: "scheduled" | "pending" | "cancelled";
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const { translations } = useLanguage();

  return (
    <div
      className={cn(
        "w-fit rounded-full px-4 py-1 text-14-medium",
        status === "scheduled" && "bg-green-500/10 text-green-500",
        status === "pending" && "bg-yellow-500/10 text-yellow-500",
        status === "cancelled" && "bg-red-500/10 text-red-500"
      )}
    >
      {translations.status[status]}
    </div>
  );
};

export default StatusBadge;

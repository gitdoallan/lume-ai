import React from "react";
import { SortButtonProps } from "./@types";
import { ChevronDownIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const SortButton: React.FC<SortButtonProps> = ({
  sortKey,
  label,
  handleSort,
  order,
}) => {
  return (
    <Button
      onClick={() => handleSort(sortKey)}
      variant="ghost"
      className=" text-muted-foreground text-xs flex justify-start gap-2 px-0"
    >
      {label}
      <ChevronDownIcon
        className={cn("size-1.5", order[sortKey] === "asc" ? "rotate-180" : "")}
      />
    </Button>
  );
};

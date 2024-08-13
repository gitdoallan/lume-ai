import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { GenderBadgeProps } from "./@types";

export const GenderBadge: React.FC<GenderBadgeProps> = ({ gender }) => {
  const colorsMap = {
    male: {
      bg: "bg-blue-50",
      text: "text-blue-400",
      hoverBg: "hover:bg-blue-100",
    },
    female: {
      bg: "bg-rose-50",
      text: "text-rose-400",
      hoverBg: "hover:bg-rose-100",
    },
  };

  const colors = colorsMap[gender] || {
    bg: "bg-gray-50",
    text: "text-gray-500",
  };

  return (
    <Badge
      className={cn(colors.bg, colors.text, colors.hoverBg, "w-fit-content")}
    >
      {gender[0].toUpperCase() + gender.slice(1)}
    </Badge>
  );
};

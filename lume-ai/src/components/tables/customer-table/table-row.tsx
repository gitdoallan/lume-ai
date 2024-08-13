import { CustomerDetailsDialog } from "@/components/dialogs/customer-detail";
import { GenderBadge } from "@/components/gender-badge";
import { TableRowProps } from "./@types";

export const TableRow: React.FC<TableRowProps> = ({
  customer,
  style,
  index,
  visibleStartIndex,
}) => {
  const CELL_GAP = 12;

  const _style = {
    ...style,
    top: style.top
      ? Number(style.top) + (index - visibleStartIndex) * CELL_GAP
      : 0,
  };

  return (
    <div
      style={{ ..._style }}
      className="text-sm font-medium px-2 bg-white rounded-[10px] overflow-hidden grid grid-cols-6 items-center"
    >
      <div className="col-span-1 ml-5">{customer.name}</div>
      <div className="col-span-2">{customer.email}</div>
      <div>+{customer.phone}</div>
      <div>
        <GenderBadge gender={customer.gender} />
      </div>
      <div className="text-center col-span-1">
        <CustomerDetailsDialog customer={customer} />
      </div>
    </div>
  );
};

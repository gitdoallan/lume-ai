
export type Customer = {
  name: string;
  email: string;
  gender: "male" | "female";
  phone: string;
}

export type TableRowProps = {
  customer: Customer;
  style: React.CSSProperties;
  index: number;
  visibleStartIndex: number;
}


export type SortButtonProps = {
  sortKey: keyof Customer;
  label: string;
  handleSort: (key: keyof Customer) => void;
  order: Order;
}

export type Order = {
  [key in keyof Customer]?: "asc" | "desc";
}
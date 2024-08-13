import { Customer } from "@/components/tables/customer-table/@types";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sortCustomers = ({
  customers,
  key,
  order,
}: {
  customers: Customer[];
  key: keyof Customer;
  order: { [key in keyof Customer]?: "asc" | "desc" };
}) => {
  return customers.sort((a, b) => {
    if (a[key] < b[key]) {
      return order[key] === "asc" ? -1 : 1;
    }

    if (a[key] > b[key]) {
      return order[key] === "asc" ? 1 : -1;
    }

    return 0;
  });
};

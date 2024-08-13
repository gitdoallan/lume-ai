"use client";

import { getCustomers } from "@/app/actions/customer";
import { useEffect, useRef, useState } from "react";
import { Customer, Order } from "./@types";
import { FixedSizeList as List } from "react-window";
import { Input } from "@/components/ui/input";
import { sortCustomers } from "@/lib/utils";
import { TableRow } from "./table-row";
import { Skeleton } from "@/components/ui/skeleton";
import { SortButton } from "./sort-button";

export function CustomerTable() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [value, setValue] = useState("");
  const [order, setOrder] = useState<Order>({
    name: "asc",
  });
  const [loading, setLoading] = useState(true);
  const visibleIndexRef = useRef(0);

  useEffect(() => {
    const fetchCustomers = async () => {
      setLoading(true);
      const customersData = await getCustomers();
      setCustomers(customersData);
      setLoading(false);
    };

    fetchCustomers();
  }, []);

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(value.toLowerCase())
  );

  const sortedCustomers = sortCustomers({
    customers: filteredCustomers,
    key: Object.keys(order)[0] as keyof Customer,
    order,
  });

  const handleSort = (key: keyof Customer) => {
    setOrder({ [key]: order[key] === "asc" ? "desc" : "asc" });
  };

  return (
    <div className="flex flex-col overflow-auto gap-2 p-2 max-w-[1000px] w-full  scrollbar">
      <div>
        <h1 className="text-2xl font-bold mb-2">Customers List</h1>
      </div>
      <Input
        type="text"
        placeholder="Search by name"
        className="w-full p-2 border border-gray-300 rounded"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <div className="grid grid-cols-6 px-2 min-w-[760px]">
        <div className="ml-3">
          <SortButton
            order={order}
            handleSort={handleSort}
            sortKey="name"
            label="Name"
          />
        </div>
        <div className="col-span-2">
          <SortButton
            order={order}
            handleSort={handleSort}
            sortKey="email"
            label="Email"
          />
        </div>
        <SortButton
          order={order}
          handleSort={handleSort}
          sortKey="phone"
          label="Phone number"
        />
        <SortButton
          order={order}
          handleSort={handleSort}
          sortKey="gender"
          label="Gender"
        />
      </div>
      {!loading && (
        <List
          height={530}
          itemCount={sortedCustomers.length}
          itemSize={65}
          width={"100%"}
          className="min-w-[760px]"
          onItemsRendered={({ visibleStartIndex }) =>
            (visibleIndexRef.current = visibleStartIndex)
          }
        >
          {(props) => (
            <TableRow
              {...props}
              customer={sortedCustomers[props.index]}
              style={props.style}
              index={props.index}
              visibleStartIndex={visibleIndexRef.current}
            />
          )}
        </List>
      )}
      {loading && (
        <div className="flex flex-col gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton className="w-full bg-gray-300 h-16" key={i} />
          ))}
        </div>
      )}
    </div>
  );
}

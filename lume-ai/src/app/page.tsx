import { CustomerTable } from "@/components/tables/customer-table";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between container mt-20 sm:px-4">
      <CustomerTable />
    </main>
  );
}

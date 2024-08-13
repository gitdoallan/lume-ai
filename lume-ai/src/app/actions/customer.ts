import customersData from '@/mock/customers.json';
import { Customer } from '@/components/tables/customer-table/@types';

export async function getCustomers(): Promise<Customer[]> {
  // Simulating async operation
  return new Promise((resolve) => {
    setTimeout(() => {
      const validatedData = customersData as Customer[];
      resolve(validatedData);
    }, 500); // Simulate a delay for async behavior
  });
}

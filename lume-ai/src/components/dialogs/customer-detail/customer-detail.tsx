import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import React from "react";
import { CustomerDetailsProps } from "./@types";
import { EllipsisIcon } from "@/components/ui/icons";
import { GenderBadge } from "@/components/gender-badge";

export const CustomerDetailsDialog: React.FC<CustomerDetailsProps> = ({
  customer,
}) => {
  return (
    <Dialog aria-labelledby="customer-details-title" aria-modal="true">
      <DialogTrigger asChild>
        <Button variant="ghost">
          <EllipsisIcon className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Customer details</DialogTitle>
          <DialogDescription id="customer-details-description">
            View details of the customer
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <div className="text-muted-foreground">Name: {customer.name}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Email: {customer.email}</div>
          </div>
          <div>
            <div className="text-muted-foreground">
              Phone number: {customer.phone}
            </div>
          </div>
          <div>
            <div className="text-muted-foreground">
              Gender: <GenderBadge gender={customer.gender} />
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

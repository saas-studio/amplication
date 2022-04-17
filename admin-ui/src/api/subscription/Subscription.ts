import { Customer } from "../customer/Customer";

export type Subscription = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  updatedAt: Date;
};

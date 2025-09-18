import { Document, Schema, model, models } from 'mongoose';

export interface CustomerType extends Document {
  name: string;
  lastName: string;
  email: string;
  phone?: string;
  address?: string;
  postalCode?: number | string;
  date?: Date;
  products: any[];
  createdAt: Date;
  updatedAt: Date;
}

const customerSchema = new Schema<CustomerType>({
  name: {
    type: String,
    required: true,
    minLength: 1,
  },
  lastName: {
    type: String,
    required: true,
    minLength: 1,
  },
  email: {
    type: String,
    required: true,
    minLength: 1,
  },
  phone: String,
  address: String,
  postalCode: String,
  date: Date,
  products: {
    type: Array as unknown as any[],
    default: [],
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },

  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const Customer =
  models?.Customer || model<CustomerType>('Customer', customerSchema);

export default Customer;

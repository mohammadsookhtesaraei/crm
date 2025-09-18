import { NextApiRequest, NextApiResponse } from 'next';

import Customer from '@/models/Customer';
import connectDB from '@/utils/connectDB';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectDB();
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message);
    }
    res
      .status(500)
      .json({ status: 'failed', message: 'Error in connecting to database' });
    return;
  }

  if (req.method === 'PATCH') {
    const id = req.query.customerId;
    const data = req.body.data;

    try {
      const customer = await Customer.findOne({ _id: id });
      customer.name = data.name;
      customer.lastName = data.lastName;
      customer.email = data.email;
      customer.phone = data.phone;
      customer.address = data.address;
      customer.postalCode = data.postalCode;
      customer.date = data.date;
      customer.products = data.products;
      customer.updatedAt = Date.now();
      customer.save();

      res.status(200).json({ status: 'success', data: customer });
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
      res.status(500).json({
        status: 'failed',
        message: 'Error in retrieving data from database',
      });
    }
  }
}

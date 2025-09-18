import Customer from '../../../models/Customer';
import connectDB from '../../../utils/connectDB';
import { NextApiRequest, NextApiResponse } from 'next';

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

  if (req.method === 'GET') {
    const id = req.query.customerId;
    try {
      const customer = await Customer.findOne({ _id: id });
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

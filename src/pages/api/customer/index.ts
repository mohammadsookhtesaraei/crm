import { NextApiRequest, NextApiResponse } from 'next';

import Customer from '@/models/Customer';
import connectDB from '@/utils/connectDB';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // check connect db
  try {
    await connectDB();
  } catch (error) {
    res.status(500).json({
      status: 'Failed',
      message: 'Error in connecting to DB',
    });
    return;
  }

  // check req post

  if (req.method === 'POST') {
    // get data from request.body = client
    const data = req.body.data;

    // validation
    if (!data.name || !data.lastName || !data.email) {
      return res.status(400).json({
        status: 'Failed',
        message: 'Invalid Data!',
      });
    }

    //    call customer model and create collaboration
    try {
      const customer = await Customer.create(data);
      res.status(201).json({
        status: 'success',
        message: 'Data created',
        data: customer,
      });
    } catch (error) {
      res.status(500).json({
        status: 'Failed',
        message: 'Error in storing data in DB',
      });
    }
  }
}

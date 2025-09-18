import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";
import { NextApiRequest, NextApiResponse } from "next";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectDB();
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        status: "Failed",
        message: "Error in connecting to DB",
      });
      return;
    }
  }

  if (req.method === "PATCH") {
    const id = req.query.customerId;
    const data = req.body.data;

    try {
      const customer = await Customer.findOne({ _id: id });
      customer.name = data.name;
      customer.lastName = data.name;
      customer.email = data.name;
      customer.phone = data.name;
      customer.address = data.name;
      customer.postalCode = data.name;
      customer.date = data.date;
      customer.products = data.products;
      customer.updatedAt = Date.now();
      customer.save();
      res.status(201).json({
        status: "success",
        data: customer,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({
          status: "failed",
          message: "Error in connecting to dataBase",
        });
      }
    }
  }
}

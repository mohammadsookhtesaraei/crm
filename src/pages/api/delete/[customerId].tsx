import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";
import { NextApiRequest, NextApiResponse } from "next";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectDB();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      res.status(500).json({
        status: "Failed",
        message: "Error in connecting to DB",
      });
      return;
    }
  }

  if (req.method === "DELETE") {
    const id = req.query.customerId;

    try {
      await Customer.deleteOne({ __id: id });
      res.status(201).json({
        status: "success",
        message: "Data deleted",
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
        res.status(500).json({
          status: "failed",
          message: "Error in Deleting DataBase",
        });
      }
    }
  }
}

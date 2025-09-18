import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";
import { NextApiRequest, NextApiResponse } from "next";

export async function handler(req:NextApiRequest,res:NextApiResponse){
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

  if(req.method === "GET"){
    const id=req.body.customerId;

    try{
    const customer=await Customer.findOne({_id:id});
    res.status(200).json({
        status:"success",
        data:customer
        
    });
    
    }catch(error:unknown){
        if(error instanceof Error){
            res.status(500).json({
                status:"failed",
                message:"Error in retrieving data from database"
            })
        }
    }
  }


}


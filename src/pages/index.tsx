import HomePage from '@/components/templates/HomePage';
import Customer from '@/models/Customer'
import connectDB from '@/utils/connectDB'
import React from 'react'

import { FormDataType } from '@/components/templates/AddCustomerPage';

interface IndexProps {
  customers:FormDataType[]
}

const Index = ({customers}:IndexProps) => {
 
  return (
   <HomePage data={customers}/>
  )
}

export default Index


export async function getServerSideProps(){
  try{
  await connectDB();
  const customers=await Customer.find();
  return {
    props:{
      customers:JSON.parse(JSON.stringify(customers))
    }
  }
  }catch(error){
    return {
      notFound:true
    }
  }
}
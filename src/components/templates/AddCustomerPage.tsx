import Form from "@/components/module/Form";
import { useRouter } from "next/router";
import { useState } from "react"


export interface ProductType {
  name: string;
  price: string;
  qty: string;
}

export type FormDataType={
    name: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    postalCode: string;
    date: string;
    products: ProductType[];
    _id:string
};





const AddCustomerPage = () => {
    const [form,setForm]=useState<FormDataType>({
    name: "",
    lastName:"",
    email: "",
    phone: "",
    address: "",
    postalCode:"",
    date:"",
    products:[],
    _id:""
    });

    const router=useRouter();

    const saveHandler= async()=>{
        const res=await fetch("/api/customer",{
            method:"POST",
            body:JSON.stringify({data:form}),
            headers:{"Content-Type":"application/json"}
        });

        const data=await res.json();
        console.log(data);

        if(data.status==="success"){
              router.push("/")
        }

    };

    const cancelHandler=()=>{
    setForm({
            name: "",
    lastName:"",
    email: "",
    phone: "",
    address: "",
    postalCode:"",
    date:"",
    products:[],
    _id:""
    });

    router.push("/")
    }

  return (
    <div className="customer-page">
        <h4>ADD New Customer</h4>
        <Form form={form} setForm={setForm}/>
        <div className="customer-page__buttons">
         <button className="first" onClick={cancelHandler}>cancel</button>
         <button className="second" onClick={saveHandler}>save</button>

        </div>

    </div>
  )
}

export default AddCustomerPage
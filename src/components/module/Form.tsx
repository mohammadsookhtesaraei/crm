
import { Dispatch,SetStateAction ,ChangeEvent } from "react";


import type { FormDataType } from "@/components/templates/AddCustomerPage";
import ItemList from "@/components/module/ItemList";
import FormInput from "@/components/module/FormInput";


interface FormProps {
    form:FormDataType,
    setForm: Dispatch<SetStateAction<FormDataType>>;
}

const Form = ({form,setForm}:FormProps) => {

  const changeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;
    setForm((prev)=>({...prev,[name]:value}))
  }

  return (
    <div>
      <FormInput name="name" type="text" label="name" value={form.name} onChange={changeHandler} placeholder="name"/>
      <FormInput name="lastName" type="text" label="lastName" value={form.lastName} onChange={changeHandler} placeholder="lastName"/>
      <FormInput name="email" type="text" label="Email" value={form.email} onChange={changeHandler} placeholder="email"/>
      <FormInput name="phone" type="tel" label="Phone" value={form.phone} onChange={changeHandler} placeholder="phone"/>
      <FormInput name="address" type="text" label="Address" value={form.address} onChange={changeHandler} placeholder="address"/>
      <FormInput name="postalCode" type="text" label="PostalCode" value={form.postalCode} onChange={changeHandler} placeholder="address"/>
      <FormInput name="date" type="date" label="Date" value={form.date} onChange={changeHandler} placeholder="Date"/>

      

      



      

      <ItemList form={form} setForm={setForm}/>
    </div>
  )
}

export default Form

import { ComponentProps } from "react"




type FormInput=ComponentProps<"input"> & {
 label:string
}



const FormInput = ({type,value,label,name,onChange,...props}:FormInput) => {
  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} value={value} onChange={onChange} {...props} />
    </div>
  )
}

export default FormInput
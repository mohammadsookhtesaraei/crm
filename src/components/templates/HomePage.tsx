
import Card from "@/components/module/Card"
import { FormDataType } from "@/components/templates/AddCustomerPage"


interface HomePageProps {
    data:FormDataType[]
}

const HomePage = ({data}:HomePageProps) => {

  return (
    <div>
        {data.map((customer)=>(
            <Card key={customer._id} {...customer}/>
        ))}
    </div>
  )
}

export default HomePage
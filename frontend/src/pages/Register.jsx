import Form from '../components/Form'
import { RegisterData } from '../data/form'

function Register() {
  return (
    <div>
      <Form head={"Register Page"} data={RegisterData}/>

    </div>
  )
}

export default Register
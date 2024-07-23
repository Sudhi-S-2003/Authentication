import Form from '../components/Form'
import { LoginData } from '../data/form'

function Login() {
  return (
    <div>
<Form head={"login Page"} data={LoginData}/>
    </div>
  )
}

export default Login
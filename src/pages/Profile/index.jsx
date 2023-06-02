import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'


export function Profile(){
  return(
    <div>
      <h1>Hello Profile</h1>
      <Link to='/'> Back to Home </Link>
    </div>
  )
}
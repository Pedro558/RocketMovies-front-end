import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Avatar } from './styles'

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

export function Profile(){
  return(
    <Container>
    <header>
      <Link to='/'>
        <FiArrowLeft />
        <span>Voltar</span>
      </Link>
    </header>

    
  </Container>
  )
}
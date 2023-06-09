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

      <Form>
        <Avatar>
          <img src="https://github.com/Pedro558.png" alt="Foto de perfil do pedro"/>

          <label htmlFor='avatar'>
            <FiCamera/>
            <input type='file' id='avatar'/>
          </label>

        </Avatar>

        <Input
          placeholder='Nome'
          type='text'
          icon={FiUser}
        />

        <Input
          placeholder='E-mail'
          type='email'
          icon={FiMail}
        />

        <Input
          placeholder='Senha Atual'
          type='password'
          icon={FiLock}
        />

        <Input
          placeholder='Nova Senha'
          type='password'
          icon={FiLock}
        />

        <Button title='Salvar'/>
      </Form>
    </Container>

    
  )
}
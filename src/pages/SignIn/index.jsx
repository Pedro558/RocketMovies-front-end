import { useAuth } from '../../hooks/auth'
import { useState } from 'react'

import { Background, Container, Form, FormControl } from './styles'
import { FiMail, FiLock } from 'react-icons/fi'

import { Link } from 'react-router-dom';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { SignInfo } from '../../components/SignInfo';


export function SignIn(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({email, password})
  }
  

  return (
    <Container>

      <FormControl>
      <SignInfo
        title='RocketMovies'
        description='Acompanhe seus filmes favoritos.'
        subtitle='Faça seu login'
      />

      <Form>
        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title='Entrar' onClick={handleSignIn}/>

        <Link to="/register">Criar conta</Link>
      </Form>
      </FormControl>
      
      <Background/>
    </Container>
  )
}
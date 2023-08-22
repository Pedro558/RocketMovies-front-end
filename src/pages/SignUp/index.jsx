import { useState } from 'react'
import { api } from '../../services/api'
import { Background, Container, Form, FormControl } from './styles'
import { FiUser, FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { SignInfo } from '../../components/SignInfo';
import { BackButton } from '../../components/BackButton';

import { Link, useNavigate } from 'react-router-dom'


export function SignUp(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSignUp(){
    if(!name || !email || !password){
      return alert('Preencha todos os campos')
    }

    if(password.length < 6){
      return alert('A senha deve conter pelo menos 6 dígitos')
    }

    api.post('/users', {name, email, password})
    .then(() =>{
      alert('Usuário cadastrado com sucesso!')
      navigate('/')
    })
    .catch( error =>{
      if(error.response){
        alert(error.response.data.message)
      } else{
        alert('Não foi possivel	cadastrar')
      }
    })
  }

  return (
    <Container>

    <Background/>

    <FormControl>
      <SignInfo
        title='RocketMovies'
        description='Acompanhe seus filmes favoritos.'
        subtitle='Crie sua conta'
      />

        <Form>
          <Input
            placeholder="Nome"
            type="text"
            icon={FiUser}
            onChange={e => setName(e.target.value)}
          />

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

          <Button title='Cadastrar' onClick={handleSignUp}/>

          <Link to="/">
            <BackButton title='Voltar para o Login'/>
          </Link>

        </Form>
        </FormControl>

      
    </Container>
  )
}
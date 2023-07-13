import { Header } from '../../components/Header'
import { Title } from '../../components/Title';
import { Input } from '../../components/Input';
import { Textarea } from "../../components/Textarea";
import { Section } from '../../components/Section';
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import { Container, Form } from './styles'

export function New(){
  return(
    <Container>
      <Header/>

      <main>
        <Form>
          <Title title='Novo Filme'>
            <Link to='/'>
              <button className='back-btn'><FiArrowLeft/>Voltar</button>
            </Link>
          </Title>

          <div className='splitter'>
            <Input placeholder='Título'/>
            <Input placeholder='Sua nota (de 0 a 5)'/>
          </div>

          <Textarea placeholder='Observações'/>

          <Section title='Marcadores'>
            <div className='tags'>
              <NoteItem
                isNew
                placeholder='Novo marcador'
                value=''
              />
              <NoteItem
                placeholder='Novo marcador'
                value='React'
              />
              <NoteItem
                placeholder='Novo marcador'
                value='React'
              />
            </div>
          </Section>

          <div className='splitter'>
            <Button title='Excluir filme' className='delete-btn'/>
            <Button title='Salvar alterações'/>
          </div>

        </Form>


      </main>


    </Container>
  )
}
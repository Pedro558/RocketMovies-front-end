import { useState } from 'react'

import { Header } from '../../components/Header'
import { Title } from '../../components/Title';
import { Input } from '../../components/Input';
import { Textarea } from "../../components/Textarea";
import { Section } from '../../components/Section';
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton"
import { Select } from '../../components/Select'
import { Container, Form, GroupTitle } from './styles'

import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

export function New(){
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState(null)
  const [description, setDescription] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }
  

  async function handleNewNote(){
    try {
      if(!title){
        throw new Error('Digite o título do filme')
      }

      if(rating <= 0 || rating > 5) {
        throw new Error('Selecione uma nota para o filme')
      }

      if(newTag === '' && tags.length == 0){
        throw new Error('Tag não preenchida adequadamente')
      }

      await api.post('/notes', {
        title,
        description,
        rating,
        tags
      })

      alert('Filme adicionado com sucesso!')
      navigate('/')

    } catch (error) {
      console.log(error)
      alert(`Algo deu errado: ${error.message}`)
    }
  }

  return(
    <Container>
      <Header/>

      <main>
        <GroupTitle>
          <BackButton title='Voltar' />
          <Title title='Novo Filme'/>
        </GroupTitle>

        <Form>

          <div className='splitter'>
            <Input 
              placeholder='Título'
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <Select 
              label="rating"
              type="number"
              value={rating}
              onChange={e => setRating(e.target.value)}
            >
              <option disabled selected>Selecione uma nota</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Select>
          </div>

          <Textarea 
            placeholder='Observações'
            value={description}
            onChange={e => setDescription(e.target.value)}

          />

          <Section title='Marcadores'>
            <div className='tags'>
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={index}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }
              
              <NoteItem
                isNew
                placeholder='Novo marcador'
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

            <Button 
              title='Salvar alterações'
              onClick={handleNewNote}
            />

        </Form>


      </main>


    </Container>
  )
}
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

import { Container, Content } from "./styles";
import { FiPlus } from 'react-icons/fi'

import { Header } from "../../components/Header";
import { Title } from '../../components/Title'
import { Note } from '../../components/Note'
import { Button } from '../../components/Button'
import { useNavigate } from "react-router-dom";


export function Home() {
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState([])
  
  const navigate = useNavigate()

  function handleDetails(id){
    navigate(`/details/${id}`)
  }

  useEffect(() =>{
    async function fetchNotes(){
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)
    }
    fetchNotes()
  }, [search])

  return (
    <Container>
      <Header setter={setSearch}/>
      <div>
      <Title title='Meus filmes' className='main-title'>
        <div>
          <Button title='Adicionar Filme' onClick={() => navigate('/new')}>
            <FiPlus/>
          </Button>
        </div>
      </Title>

      <Content className='content-area'>

        {
          notes.map(note => (
            <Note
              key={note.id}
              data={note}
              onClick={() => handleDetails(note.id)}
            />
          ))
        }

      </Content>
      </div>
    </Container>
  );
}

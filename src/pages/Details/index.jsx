import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth'

import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { BackButton } from "../../components/BackButton";
import { CountStars } from "../../components/CountStars";
import { Tag } from '../../components/Tag';

import { BiTime, BiTrash } from "react-icons/bi";

import { 
  Container,
  DetailsBox, 
  Info, 
  Profile, 
  Datetime, 
  Tags,
  MovieDescription
} from "./styles";

export function Details() {
  const params = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const [data, setData] = useState(null)

  async function handleRemove(){
    const confirm = window.confirm('Deseja realmente remover a nota ?')

    if(confirm){
      await api.delete(`/notes/${params.id}`)
      navigate('/')
    }
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    
    fetchNote()
  }, [])
  
  return (
    <Container>
      <Header/>
      {console.log(data)}
      {data && 
      <>
      <DetailsBox className='details-box'>
        <BackButton title='Voltar'>
          <BiTrash 
            onClick={handleRemove}
            className='remove-btn'
          />
        </BackButton>

        <Title 
          title={data.note.title}
          className='title'
        >
          <CountStars 
            rating={data.note.rating}
            className='rating'
          />
        </Title>

        <Info className='profile-info'>
          <Profile>
            <img
             src={avatarUrl}
             alt='Foto de perfil do usuário'
            />
            <span>Por {user.name}</span>
          </Profile>

          <Datetime>
            <BiTime/>
            <span>{data.note.created_at}</span>
          </Datetime>
        </Info>

        <Tags>
          {data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)}
        </Tags>
      </DetailsBox>

      <MovieDescription className='movie-description'>
        {data.note.description}
      </MovieDescription>
      </>
      }
    </Container>
  )
}

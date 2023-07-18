import { useState } from 'react'
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { BackButton } from "../../components/BackButton";
import { CountStars } from "../../components/CountStars";
import { Tag } from '../../components/Tag';

import { BiTime } from "react-icons/bi";

import { 
  Container,
  DetailsBox, 
  Info, 
  Profile, 
  Datetime, 
  Tags,
  MovieDescription
} from "./styles";

let initialData = {
  id: 1,
  title: 'The Whale',
  rating: 4,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, maiores laudantium inventore ut nihil voluptatum impedit ipsa. Optio quis perferendis cupiditate provident reiciendis quae quas assumenda, libero hic laboriosam.",
  tags: [
    {id: '1', name: 'Drama'},
    {id: '2', name: 'Oscar'},
    {id: '3', name: 'Obesity'},
  ],
  created_at: '2023-03-19 21:30:04'
}

export function Details() {
  const [data, setData] = useState(initialData)
  
  return (
    <Container>
      <Header/>

      <DetailsBox className='details-box'>
        <BackButton title='Voltar'/>

        <Title 
          title={data.title}
          className='title'
        >
          <CountStars 
            rating={data.rating}
            className='rating'
          />
        </Title>

        <Info className='profile-info'>
          <Profile>
            <img
             src='https://github.com/Pedro558.png'
             alt='Foto de perfil do usuário'
            />
            <span>Por Pedro Afonso</span>
          </Profile>

          <Datetime>
            <BiTime/>
            <span>{data.created_at}</span>
          </Datetime>
        </Info>

        <Tags>
          {data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)}
        </Tags>
      </DetailsBox>

      <MovieDescription className='movie-description'>
        {data.description}
      </MovieDescription>
    </Container>
  )
}

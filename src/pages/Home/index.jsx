import { Container, NewMovie, Content } from "./styles";

import { Header } from "../../components/Header";
import { FiPlus } from 'react-icons/fi'
import { Title } from '../../components/Title'
import { Note } from '../../components/Note'

export function Home() {
  return (
    <Container>
      <Header />
      
      <Title title='Meus filmes'>
        <NewMovie>
          <FiPlus/>
          Adicionar filme
        </NewMovie>
      </Title>

      <Content>
        <Note data={{
          title: 'The Whale',
          rating: 4,
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, maiores laudantium inventore ut nihil voluptatum impedit ipsa. Optio quis perferendis cupiditate provident reiciendis quae quas assumenda, libero hic laboriosam.",
          tags: [
            {id: '1', name: 'drama'},
            {id: '2', name: 'oscar'},
            {id: '3', name: 'obesity'},
          ]
        }}/>
      </Content>
    </Container>
  );
}

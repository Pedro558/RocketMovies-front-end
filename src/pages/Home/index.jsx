import { Container, Content } from "./styles";
import { FiPlus } from 'react-icons/fi'

import { Header } from "../../components/Header";
import { Title } from '../../components/Title'
import { Note } from '../../components/Note'
import { Button } from '../../components/Button'
import { useNavigate } from "react-router-dom";


export function Home() {
  const navigate = useNavigate()

  return (
    <Container>
      <Header />
      <div>
      <Title title='Meus filmes' className='main-title'>
        <div>
          <Button title='Adicionar Filme' onClick={() => navigate('/new')}>
            <FiPlus/>
          </Button>
        </div>
      </Title>

      <Content className='content-area'>
        <Note data={{
          title: 'The Whale',
          rating: 4,
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, maiores laudantium inventore ut nihil voluptatum impedit ipsa. Optio quis perferendis cupiditate provident reiciendis quae quas assumenda, libero hic laboriosam.",
          tags: [
            {id: '1', name: 'Drama'},
            {id: '2', name: 'Oscar'},
            {id: '3', name: 'Obesity'},
          ]
        }}/>

        <Note data={{
          title: 'Fast and Furious',
          rating: 2,
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, maiores laudantium inventore ut nihil voluptatum impedit ipsa. Optio quis perferendis cupiditate provident reiciendis quae quas assumenda, libero hic laboriosam.",
          tags: [
            {id: '1', name: 'Drama'},
            {id: '2', name: 'Oscar'},
            {id: '3', name: 'Obesity'},
          ]
        }}/>

        <Note data={{
          title: 'Stranger Things',
          rating: 3,
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, maiores laudantium inventore ut nihil voluptatum impedit ipsa. Optio quis perferendis cupiditate provident reiciendis quae quas assumenda, libero hic laboriosam.",
          tags: [
            {id: '1', name: 'Drama'},
            {id: '2', name: 'Oscar'},
            {id: '3', name: 'Obesity'},
          ]
        }}/>
      </Content>
      </div>
    </Container>
  );
}

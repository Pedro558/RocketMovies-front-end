import { Container, NewMovie, Content } from "./styles";

import { Header } from "../../components/Header";
import { FiPlus } from 'react-icons/fi'
import { Title } from '../../components/Title'

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
        
      </Content>
    </Container>
  );
}

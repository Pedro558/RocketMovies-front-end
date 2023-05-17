import { Container, Title, NewMovie, Content } from "./styles";

import { Header } from "../../components/Header";
import { FiPlus } from 'react-icons/fi'

export function Home() {
  return (
    <Container>
      <Header />
      
      <Title>
        <h1>Meus filmes</h1>
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

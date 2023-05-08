import { Container, Title, Search, Profile, Logout } from './styles';
import { Input } from '../Input'
import { FiSearch} from 'react-icons/fi'

export function Header(){
  return(
    <Container>
      <Title>RocketMovies</Title>
      
      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
      </Search>

      <Profile>
        <img 
          src='https://github.com/Pedro558.png'
          alt='Foto de perfil do usuário'
        />

        <div>
          <strong>Nome do Usuário</strong>
          <Logout/>
        </div>
      </Profile>


    </Container>
  )
}
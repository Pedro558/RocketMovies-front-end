import { Container, Title, Search, Profile, Photo } from './styles';
import { Input } from '../Input'
import { FiSearch} from 'react-icons/fi'

export function Header(){
  return(
    <Container>
      <Title>RocketMovies</Title>
      
      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
      </Search>

      <Profile to='/profile'>
        <div>
          <strong>Nome do Usuário</strong>
          <button>Sair</button>
        </div>

        <Photo href='#'>
          <img 
            src='https://github.com/Pedro558.png'
            alt='Foto de perfil do usuário'
          />
        </Photo>
      </Profile>


    </Container>
  )
}
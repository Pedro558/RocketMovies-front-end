import { useState, useEffect } from 'react'
import { Input } from '../Input'
import { Hamburger } from '../Hamburger'
import { FiSearch} from 'react-icons/fi'
import { Link } from 'react-router-dom';

import { 
  Nav, 
  Container,
  MenuIcon,
  Title, 
  Search, 
  NavElements, 
  Profile, 
  Photo 
} from './styles';


export function Header(){
  const [showNavbar, setShowNavbar] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  function checkWindowSize(){
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize',checkWindowSize)

    return () => {
      window.removeEventListener('resize',checkWindowSize)
    }
  }, [])


  function handleShowNavbar(){
    setShowNavbar(!showNavbar)
  }

  return(
    <Nav>
      <Container>
        <Title><Link to='/'>RocketMovies</Link></Title>

        <MenuIcon 
        onClick={handleShowNavbar}
        className='menu-icon'
        >
          <Hamburger/>
        </MenuIcon>

      <NavElements
        className={`nav-elements  ${showNavbar && "active"}`}
      >
        <Search
          className='search'
        >
          <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
        </Search>

        <Profile>
          <div>
            <Link 
              to='/profile'
              className='user-name'
            >
              {windowWidth < 768 ? 'Perfil' : 'Pedro Afonso'}
              
            </Link>
            <button onClick={() => alert('Voce saiu da página')}>Sair</button>
          </div>

          <Photo 
            to='/profile'
            className='profile-photo'  
          >
            <img 
              src='https://github.com/Pedro558.png'
              alt='Foto de perfil do usuário'
            />
          </Photo>
         </Profile>
      </NavElements>
      </Container>
    </Nav>
  )
}
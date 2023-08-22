import { useState, useEffect } from 'react'
import { Input } from '../Input'
import { Hamburger } from '../Hamburger'
import { FiSearch} from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

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


export function Header({setter}){
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  const [showNavbar, setShowNavbar] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

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
          <Input
            placeholder="Pesquisar pelo título" 
            icon={FiSearch}
            onChange={(e) => setter(e.target.value)}
          />
        </Search>

        <Profile>
          <div>
            <Link 
              to='/profile'
              className='user-name'
            >
              {windowWidth < 768 ? 'Perfil' : `${user.name}`}
              
            </Link>
            <button onClick={() => {
              signOut()
              navigate('/')
              }}>
                Sair
              </button>
          </div>

          <Photo 
            to='/profile'
            className='profile-photo'  
          >
            <img 
              src={avatarUrl}
              alt={user.name}
            />
          </Photo>
         </Profile>
      </NavElements>
      </Container>
    </Nav>
  )
}
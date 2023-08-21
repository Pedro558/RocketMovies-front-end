import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import { Container } from './styles'

export function BackButton({title, children}){
  const navigate = useNavigate()

  return(
    <Container>
      <button onClick={() => navigate(-1)}>
        <FiArrowLeft />
        <span>{title}</span>
      </button>

      {children}
    </Container>
  )
}
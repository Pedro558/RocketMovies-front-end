import { Container } from './styles'

export function Title({ title, children }){
  return(
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  )
}
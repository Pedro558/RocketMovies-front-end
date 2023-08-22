import { Container, Title, Subtitle, Description} from './styles'

export function SignInfo({ title, description, subtitle, children, ...rest}){
  return(
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Subtitle>{subtitle}</Subtitle>
      {children}
    </Container>
  )
}
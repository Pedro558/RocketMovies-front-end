import { Container } from './styles'
import { Tag } from '../../components/Tag'
import { CountStars } from '../CountStars'

export function Note({ data, onClick, ...rest}){
  return(
    <Container
    onClick={onClick}
    {...rest}
    >
      <h2>{data.title}</h2>

      <CountStars rating={data.rating} />

      <p>{data.description}</p>

      {
        data.tags && 
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
          }
        </footer>
      }
    </Container>
  )
}
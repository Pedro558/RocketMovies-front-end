import { Container } from './styles'
import { Tag } from '../../components/Tag'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export function Note({ data, ...rest}){
  return(
    <Container>
      <h1>{data.title}</h1>

      {
        data.rating &&
        <span>
          {
            (() => {
              const filledStars = data.rating;
              const emptyStars = 5 - filledStars;

              const stars = [];

              for (let i = 0; i < filledStars; i++) {
                stars.push(<span key={i}> <AiFillStar/> </span>);
              }

              for (let i = 0; i < emptyStars; i++) {
                stars.push(<span key={filledStars + i}><AiOutlineStar/></span>);
              }

              return stars;
            })()
          }
       </span>
        
      }

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
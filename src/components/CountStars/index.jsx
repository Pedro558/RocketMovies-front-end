import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Container } from './styles'

export function CountStars({rating, ...rest}){
  return(
    <Container {...rest}>
      {
        (() => {
          const filledStars = rating;
          const emptyStars = 5 - filledStars;

          const stars = [];

          for (let i = 0; i < filledStars; i++) {
            stars.push(<span key={i}> <AiFillStar size={26}/> </span>);
          }

          for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={filledStars + i}><AiOutlineStar size={26}/></span>);
          }

          return stars;
          })()
        }
    </Container>
  )
}
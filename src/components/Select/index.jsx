import { Container } from './styles';

export function Select({children, label, category, ...rest }){
  return(
    <Container>
      <label htmlFor={label}></label>
      <select
        id={label}
        name={label}
        {...rest}
      >
        {children}
      </select>
    </Container>
  )
}
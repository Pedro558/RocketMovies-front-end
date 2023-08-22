import styled from 'styled-components'

export const Container = styled.span`
  height: 20px;
  margin: 8px 0px 15px;
  
   svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
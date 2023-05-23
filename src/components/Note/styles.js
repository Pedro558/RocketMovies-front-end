import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme })=> theme.COLORS.BACKGROUND_PINK};
  
  border: none;
  border-radius: 16px;
  padding: 32px;

  >h1{
    color: ${({ theme })=> theme.COLORS.WHITE};
  }

  & svg{
    color: ${({ theme })=>theme.COLORS.PINK};
  }

  >p{
    color: ${({ theme })=> theme.COLORS.GRAY_100};
  }
`
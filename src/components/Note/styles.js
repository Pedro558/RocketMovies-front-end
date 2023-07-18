import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme })=> theme.COLORS.BACKGROUND_PINK};
  
  border: none;
  border-radius: 16px;
  padding: 32px;

  display: flex;
    flex-direction: column;
    align-items: flex-start;

  >h2{
    color: ${({ theme })=> theme.COLORS.WHITE};
  }

  >p{
    color: ${({ theme })=> theme.COLORS.GRAY_100};
    text-align: left;
    margin-bottom: 15px;
  }
`
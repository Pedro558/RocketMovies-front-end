import styled from 'styled-components'

export const Container = styled.section`
  margin: 28px 0;

  >h2{
    margin-bottom: 24px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
  }

  @media(max-width: 768px){
    margin-bottom: 12px;
  }
`
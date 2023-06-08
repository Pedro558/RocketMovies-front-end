import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 116px 90px auto;
  grid-template-areas:
  "header"
  "title"
  "content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`

export const Title = styled.div`
  grid-area: title;
  display: flex;
  margin: 45px 120px 35px;
  height: 50px;
  align-items: center;
  justify-content: space-between;

  >h1{
    font-size: 32px;
  }
`

export const NewMovie = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 207px;
  height: 48px;
  border-radius: 8px;
  font-size: 16px;
  color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  background-color: ${({theme}) => theme.COLORS.PINK};
  line-height: 21px;
  gap: 8px;
  padding: 14px 25px;
`

export const Content = styled.div`
  grid-area: content;
  width: 100%;
  padding: 0 120px; 
  overflow-y: auto;
  margin: 40px auto;
  display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`
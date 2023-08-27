import styled from 'styled-components';

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

  .main-title{
    grid-area: title;
    margin: 45px 120px 35px;
    justify-content: space-between;
    gap: 0px;
  }

  @media(max-width: 768px){
    .main-title{
      flex-direction: column;
      margin-inline: 0px;
    }

    .content-area{
      margin-top: 100px;
      padding-inline: clamp(10px, 10px + 3vw, 35px);
    }
  }

`

export const Title = styled.div`
  grid-area: title;
  display: flex;
  flex-direction: row;
  margin: 45px 120px 35px;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  
`

export const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  padding: 0 120px; 
  overflow-y: auto;
  margin: 40px auto;
  padding-bottom: 40px;
`
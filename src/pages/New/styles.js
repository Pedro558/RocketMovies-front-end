import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  "header"
  "content";

  >main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags{
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    padding: 16px;
    border-radius: 8px;
  }
`
export const Form = styled.form`
  width: 80%;
  margin: 38px auto;

   >div:nth-child(1){
    flex-direction: column-reverse;
    align-items: flex-start;
    margin: 40px 0;
    height: 92px;
  }

  .back-btn{
    background: none;
    border: none;
    color:  ${({ theme }) => theme.COLORS.PINK};
  }

  .splitter{
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }

  .delete-btn{
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    color:  ${({ theme }) => theme.COLORS.PINK}; 
  }

  @media(max-width: 768px){
    .splitter{
      gap: 15px;
      flex-direction: column;
    }
  }
`
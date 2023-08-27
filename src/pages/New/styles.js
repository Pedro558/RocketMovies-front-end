import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

   >main {
    margin: 40px auto;
    width: 75vw;
    padding-bottom: 40px;
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

export const GroupTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

`

export const Form = styled.form`
  margin: 40px auto;

  .splitter{
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }

  @media(max-width: 768px){
    .splitter{
      gap: 15px;
      flex-direction: column;
    }
  }
`
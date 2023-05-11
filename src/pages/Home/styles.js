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
`

export const Title = styled.div`
  grid-area: title;
  background-color: blue;
  width: 70%;
  height: 90px;
  margin: 0 auto;
`

export const Content = styled.div`
  grid-area: content;
  background-color: orange;
  width: 70%;
  height: 60vh;
  margin: 0 auto;
`
import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 200px;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  color: ${({theme}) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  margin: 40px 0 40px;
  border-radius: 10px;
  padding: 16px;

  &:placeholder{
    color: ${({theme}) => theme.COLORS.GRAY_300};
  }

  @media(max-width: 768px){
    margin: 20px 0 20px;
  }
`
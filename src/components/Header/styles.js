import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 115px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  gap: 64px;
  align-items: center;

  padding: 30px 80px;
`;

export const Title = styled.h1`
  font-size: 24px;
  line-height: 32px;
  color: ${({ theme }) => theme.COLORS.PINK};
`;

export const Search = styled.div`
  flex-grow: 1;
`;

export const Photo = styled.a`
  >img{
      width: 64px;
      height: 64px;
      border-radius: 50%;
   }
`

export const Profile = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 9px;

  > div{
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    > button{
      border: none;
      background: none;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

 
`;

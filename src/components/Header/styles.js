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

  padding: 0 80px;
`;

export const Title = styled.h1`
  font-size: 24px;
  line-height: 32px;
  color: ${({ theme }) => theme.COLORS.PINK};
`;

export const Search = styled.div``;

export const Profile = styled.a``;

export const Logout = styled.button``;

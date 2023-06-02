import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header{
    width: 100%;
    height: 144px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
    display: flex;
    align-items: center;
    padding: 0 124px;

    a{
      display: flex;
      align-items: center;
      gap: 8px;
    }

    svg{
      font-size: 24px;
    }

    a, svg{
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`
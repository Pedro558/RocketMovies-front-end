import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};

  border-radius: 10px;
  padding-right: 16px;

  > input {
    height: 56px;
    width: 100%;
    border: none;
    padding: 16px;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > button {
      border: none;
      background: none;
    }
`;

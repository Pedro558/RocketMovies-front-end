import styled from 'styled-components'

export const Container = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

    >button{
      display: flex;
      align-items: center;
      gap: 8px;
      background: none;
      border: none;
    }

    >svg{
      font-size: 24px;
    }

    >button, >svg{
      color: ${({ theme }) => theme.COLORS.PINK};
    }
`
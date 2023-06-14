import styled from 'styled-components'

export const Container = styled.div`
  .tags{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    padding: 16px;
  }
`
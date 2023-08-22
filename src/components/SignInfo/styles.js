import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-inline: clamp(60px, 20px + 5vw, 136px);
  height: 80px;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.PINK};
  height: 80px;
  font-size: clamp(32px, 12px + 5vw ,48px);
`

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 24px;
  padding: 48px 0;
  padding-left: 2px;
`

export const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`
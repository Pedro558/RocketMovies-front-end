import styled from "styled-components";
import seta from '../../assets/seta.svg'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  
  > select{
    height: 76px;
    padding: 1.4rem;

    border: none;
    border-radius: 10px;

    color: ${({ theme }) => theme.COLORS.GRAY_300};

    appearance: none;
    background-image: url(${seta});
    background-repeat: no-repeat;
    background-position: right 2rem top 50%;
    background-size: 1.6rem auto;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }
`
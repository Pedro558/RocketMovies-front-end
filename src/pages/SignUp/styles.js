import styled from 'styled-components';
import backgroundImg from '../../assets/background.png'


export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const FormControl = styled.section`
  display: flex;
  flex-direction: column;
  margin: 160px auto;

  >div{
    height: 20px;
  }
`

export const Form = styled.form`
  padding-top: 68px;
  padding-inline: clamp(60px, 12px + 6vw, 136px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  text-align: center;

  >a{
    margin-top: 42px;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: brightness(0.5);
`

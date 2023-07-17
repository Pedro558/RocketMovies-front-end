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
  }

  @media(max-width: 688px){
    > header{
      padding: 35px 20px;
      align-items: flex-start;
    }
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto;
  padding: 10px;

  > div:nth-child(4){
      margin-top: 24px;
    }
`

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;
  width: 186px;
  height: 186px;

  
  > img{
    height: 186px;
    width: 186px;
    border-radius: 50%;
  }

  >label{
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    input{
      display: none;
    }

    svg{
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }

`
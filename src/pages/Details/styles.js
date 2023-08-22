import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  @media(max-width: 768px){
    .details-box{
      margin: 40px auto;
      align-items: flex-start;
    }

    .movie-description{
      margin: 40px auto;
    }

    .title{
      flex-direction: column;
    }

    .profile-info{
    margin-top: 40px;
  }

    
  }
`

export const DetailsBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  margin: 40px 120px;
  width: 75vw;

  .rating{
    margin: 0;
  }

  .remove-btn{
    cursor: pointer;
    transition: filter 0.2s ease 0s;
  }

  .remove-btn:hover{
    filter: brightness(0.9);
  }
`

export const Info = styled.div`
  display: flex;
  gap: 12px;
`

export const Profile = styled.div`
  >img{
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  >span{
    padding-left: 8px;
  }
`

export const Datetime = styled.span`
  >svg{
    color: ${({theme}) => theme.COLORS.PINK}
  }

  >span{
    padding-left: 8px;
  }
`

export const Tags = styled.div`
  >span{
    background-color: #282124;
  }
`

export const MovieDescription = styled.div`
  width: 75vw;
  margin: 40px 120px;
`
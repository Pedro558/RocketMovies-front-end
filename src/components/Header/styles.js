import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  position: relative;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;
  grid-template-rows: auto;
  gap:10px;

  margin: 0 auto;

  height: 100%;
  width: 100%;
  padding: 30px 80px;

  @media(max-width: 768px){
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;

    .menu-icon{
      display: block;
      cursor: pointer;
    }

    .nav-elements{
      position: absolute;
      left: 0;
      top: 115px;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      width: 100%;
      height: 0;
      transition: all 0.3s ease-in;
      overflow: hidden;
      flex-direction: column;
      justify-content: flex-start;
      gap: 0;
      margin-left: 0;
    }

    .search{
      flex-grow: 0;
      width: 90%;
    }

    .nav-elements.active{
      height: calc(100vh - 115px);
      padding-top: 30px;
    }
  }
`

export const Title = styled.h1`
  grid-area: 1/1/2/2;
  display: flex;
  align-items: center;
  font-size: 24px;
  line-height: 32px;
  color: ${({ theme }) => theme.COLORS.PINK};
`;

export const MenuIcon = styled.div`
  display: none;
`

export const NavElements = styled.div`
  grid-area: 1/2/2/4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;
  margin-left: 30px;
`

export const Search = styled.div`
  flex-grow: 0.8;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 9px;

  > div{
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media(max-width: 872px){
      align-items: flex-start;
    }

    > button{
      border: none;
      background: none;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    >.user-name{
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
  @media(max-width: 768px){
    width: 90%;
    
    .profile-photo{
      display: none;
    }
    
    >div{  
      align-items: flex-start;
      gap: 16px;
      margin-top: 16px;
        >.user-name{
          font-weight: 400;
        }
        >button{
          color: ${({ theme }) => theme.COLORS.WHITE};
        }
        >.user-name, >button{
          font-size: 24px;
        }

      }
    }
`;

export const Photo = styled(Link)`
  >img{
      width: 64px;
      height: 64px;
      border-radius: 50%;
   }
`


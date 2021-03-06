import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Button = styled.button`
  background-color: black;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: white;
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

export const SidebarContainer = styled.div`
  background-color: black;
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const Logo = styled.div`
  width: 2.5rem;
  span {
    width: 100%;
    height: auto;
  }
`;

export const Stickbar = styled.ul`
  color: white;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  padding: 2rem 0;
  position: absolute;
  top: 6rem;
  left: 0;
  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

export const Item = styled(NavLink) `
  text-decoration:none;
  color:var(--white);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 1rem;

  &:hover {
    border-right: 4px solid var(--white);

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

export const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

export const Profile = styled.div`
  width: ${(props) => (props.clicked ? "14rem" : "3rem")};
  height: 3.5rem;
  padding:0.5rem 1rem;
  border-radius:20px;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-left:${(props)=>props.clicked ? '9rem' : "0"};
background-color:black;
color:white;
transition:all 0.3s ease;  
  img{
    width:2.5rem;
    height:2.5rem;
    border-radius:50%;
    cursor:pointer;
    &:hover{
      border:2px solid var(--gray);
      padding:2px;
    }
  }
`;

export const Details=styled.div `
display:${(props)=>(props.clicked ? "flex" : "none")};
justify-content:space-between;
align-items:center;
`

export const Name=styled.div `
padding:0 1.5rem;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
h5{
  text-align:center;
  display:inline-block;
}
a{
font-size:0.8rem;
text-decoration:none;
color:var(--gray);
&:hover {
      text-decoration: underline;
    }
}
`

export const Logout=styled.button `
border:none;
width:2rem;
height:2rem;
background-color:transparent;
img{
  width:100%;
  height:auto;
  filter:invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
      brightness(100%) contrast(126%);
  transition:all 0.3s ease;
      &:hover{
        border:none;
        padding:0;
        opacity:0.5;
      }
}
`

export const Container=styled.div `
position:fixed;

.active{
  border-right:4px solid var (--white) 
}
`
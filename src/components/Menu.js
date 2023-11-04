import React from 'react'
import styled from 'styled-components'
import logo from "../img/a.jpg"
import { Link } from 'react-router-dom';
 
const Container=styled.div`
  flex:1;
  background-color:${({theme})=>theme.bgLighter};
  height:100vh;
  color:${({theme})=>theme.text};
  font-size:14px;
  position:sticky; 
  top:0;
`;
const Wrapper=styled.div`
  padding:18px 26px;
`;
const Logo=styled.div`
  display:flex;
  align-items:center;
  gap:5px;
  font-weight:bold;
  margin-bottom:25px;
`;
const Img=styled.img`
height:25px;
`;
const Item=styled.div`
 display:flex;
align-items:center;
gap:20px;
cursor:pointer;
padding:7.5px 0px;
`;
const Hr=styled.hr`
margin:15px 0px;
border:0.5px solid ${({theme})=>theme.soft};
`;
const Login=styled.div`
font-size:12px`;
const Button=styled.button`
padding:5px 15px;
background-color:transparent;
border:1px solid #3ea6ff;
color:#3ea6ff;
border-radius:3px;
font-weight:500;
margin-top:10px;
cursor:pointer;
display:flex;
align-items:center;
gap:5px;
`;


const Menu = ({darkMode,setDarkMode}) => {
  return (
    <Container>
      <Wrapper>
      <Link to="/" style={{textDecoration:"none",color:"inherit"}}>

        <Logo>
          <Img src={logo}/>
          You View
        </Logo>
        </Link>
        <Item>
          Home
        </Item>
        <Item>
          Expore
        </Item>
        <Item>
          Subscription
        </Item>
        <Hr/>
        <Item>
          Library
        </Item>
        <Item>
          History
        </Item>
        <Hr/>
        <Login>
          Sing in to like videos, comment, and subscribe;
          <Button>SIGN IN</Button>
        </Login>
        <Hr/>
        <Item>
          Music
        </Item>
        <Item>
          Sports
        </Item>
        <Item>
          Gaming
        </Item>
        <Item>
          Movies
        </Item>
        <Item>
          News
        </Item>
        <Item>
          Live
        </Item>
        <Hr/>
        <Item>
          Setting
        </Item>
        <Item>
          Report
        </Item>
        <Item>
          Help
        </Item>
        <Item onClick={()=>setDarkMode(!darkMode)}> 
          {darkMode ? "Light" :"Dark"} Mode

        </Item>
      </Wrapper>
    </Container>
  )
}

export default Menu
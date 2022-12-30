import React from 'react'
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import {SearchOutlined, ShoppingCartOutlined} from '@mui/icons-material';
import LogoSrc from '..//assets/GoldGradientmedium.png'
import { Link } from 'react-router-dom';
import {mobile} from "../responsive"

const Container = styled.div`
  height: 80px;
  background-color: #0b0b0b;
  color: #e3cb99;
  padding: 5px 0;
  ${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
  padding: 10px 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding: "10px 0"})}
`;
const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center; 
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: "none"})}
`;

const SearchContainer = styled.div`
  border: 1px solid #e3cc9975;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({margin: "0 10px"})}

`
const Input = styled.input`
  border:none;
  background: transparent;
  color: #e3cb99;
  &:focus-visible{
  outline: transparent;
  }
  ${mobile({width: "50px"})}
`;

const Center = styled.div`
  flex:1;
  text-align: center;
`;
const Logo = styled.img`
  width: 200px;
  ${mobile({width: "110px"})}
`
const Right = styled.div`
  flex:1;  
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex: "2",justifyContent: "center"})}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  ${mobile({fontSize: "10px", marginLeft: "10px"})}
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='search'/>
            <SearchOutlined style={{fontSize:"16px"}}/>
          </SearchContainer>
        </Left>
        <Center><Link to="/"><Logo src={LogoSrc}/></Link></Center>
        <Right>
          <Link to="/register"><MenuItem>REGISTER</MenuItem></Link>
          <Link to='/sign-in'><MenuItem>SIGN IN</MenuItem></Link>
          <MenuItem>
            <Badge badgeContent={2}
            sx={{
            "& .MuiBadge-badge": {
              color: "#670404",
              backgroundColor: "#e3cb99"
            }
          }} >
            <ShoppingCartOutlined/>
    </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
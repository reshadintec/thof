import React from 'react'
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import {SearchOutlined, ShoppingCartOutlined} from '@mui/icons-material';
import LogoSrc from '..//assets/GoldGradientmedium.png'
const Container = styled.div`
  height: 80px;
  background-color: #0b0b0b;
  color: #e3cb99;
  padding: 5px 0;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center; 
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 1px solid #e3cc9975;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;


`
const Input = styled.input`
  border:none;
  background: transparent;
  color: #e3cb99;
  &:focus-visible{
  outline: transparent;
  }
`;

const Center = styled.div`
  flex:1;
  text-align: center;
`;
const Logo = styled.img`
  width: 200px;
`
const Right = styled.div`
  flex:1;  
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/>
            <SearchOutlined style={{fontSize:"16px"}}/>
          </SearchContainer>
        </Left>
        <Center><Logo src={LogoSrc}/></Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Register</MenuItem>
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
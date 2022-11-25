import React from 'react'
import styled from 'styled-components';
import {SearchOutlined} from '@mui/icons-material';
const Container = styled.div`
  height: 60px;
  background-color: #0b0b0b;
  color: #e3cb99;
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
const Logo = styled.h1`
  font-weight: bold; 
`
const Right = styled.div`
  flex:1;  
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input></Input>
            <SearchOutlined/>
          </SearchContainer>
        </Left>
        <Center><Logo>House of Fragrance</Logo></Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
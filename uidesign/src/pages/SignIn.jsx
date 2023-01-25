import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";

const Container = styled.div`
  background: url("https://images.unsplash.com/photo-1543422655-ac1c6ca993ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  ${mobile({backgroundSize:"cover"})};

`;

const Login = styled.div`
  width: 30%;
  height: 55vh;
  background: radial-gradient(circle, rgba(63,13,18,1) 0%, rgba(23,5,5,1) 50%);
  margin: 90px auto;
  color: #e3cb99;
  padding: 30px 0 30px 50px;
  ${mobile({width:"70%",margin:"100px auto"})};

`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Label = styled.label`  
`;

const Input = styled.input`
  margin: 5px 50px 0 0;
  height: 40px;
  padding-left: 4px;
  background-color: transparent;
  border: 1px solid #e3cc9975;
  color: white;
  &:focus-visible{
    outline: none;
  }
`;

const Button = styled.button`
  margin: 40px 50px 40px 0 ;
  background-color: #e3cb99;
  border: none;
  padding: 10px 0;
  cursor: pointer; 
  color: #170505;
  transition: all 0.6s ease;
  &:hover{
    background-color: #bf963f;
  };
  &:disabled{
    cursor:not-allowed
  }
`;

const Text = styled.h6`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 10px;
  cursor: pointer; 
  transition: all 0.6s ease;
  &:hover{
    text-decoration: underline;
  }
`; 

const Error = styled.span`
  color:red;
`;

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Login>
        <Title>Sign in</Title>
        <Form>
          <Item>
            <Label>Username</Label>
            <Input type='text' placeholder="johndoe"
            onChange={(e) => setUsername(e.target.value)} />
          </Item>
          <Item>
            <Label>Password</Label>
            <Input type='password' placeholder="* * * * * * *"
            onChange={(e) => setPassword(e.target.value)} />
          </Item>
          <Button onClick={handleClick} disabled={isFetching}>Login</Button>
          {error && <Error>Please check your credentials...</Error>}
        </Form>
        <Text>Forgot Password?</Text>
        <Text>Create New Account</Text>
      </Login>
      <Footer/>
    </Container>
  )
}

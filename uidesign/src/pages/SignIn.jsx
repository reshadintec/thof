import styled from "styled-components"
import Announcement from "../components/Announcement";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div`
  background: url("https://i.pngimg.me/search_image_v2/243eb60f6f");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
`;

const Login = styled.div`
  width: 30%;
  height: 55vh;
  background: radial-gradient(circle, rgba(63,13,18,1) 0%, rgba(23,5,5,1) 50%);
  margin: 90px auto;
  color: #e3cb99;
  padding: 30px 0 30px 50px;
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

export const SignIn = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Login>
        <Title>Sign in</Title>
        <Form>
          <Item>
            <Label>Username</Label>
            <Input type='text' placeholder="johndoe" />
          </Item>
          <Item>
            <Label>Password</Label>
            <Input type='password' placeholder="* * * * * * *" />
          </Item>
          <Button>Login</Button>
        </Form>
        <Text>Forgot Password?</Text>
        <Text>Create New Account</Text>
      </Login>
      <Footer/>
    </Container>
  )
}

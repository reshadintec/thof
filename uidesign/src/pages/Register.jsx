import styled from "styled-components"
import Announcement from '../components/Announcement'
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Newsletter } from '../components/Newsletter';
const Container = styled.div`
  background: url("https://images.unsplash.com/photo-1543422655-ac1c6ca993ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const RegisterContainer = styled.div`
  width: 60%;
  height: 65vh;
  background: rgb(63,13,18);
  background: radial-gradient(circle, rgba(63,13,18,1) 0%, rgba(23,5,5,1) 50%);
  margin: 50px auto;
  color: #e3cb99;
  padding: 30px 0 30px 50px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const Label = styled.label`  
`;

const Input = styled.input`
  margin: 5px 50px 0 0;
  height: 30px;
  padding-left: 4px;
  background-color: transparent;
  border: 1px solid #e3cc9975;
  color: white;
  &:focus-visible{
    outline: none;
  }
`;

const Button = styled.button`
  margin: 70px 50px 0 0 ;
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



export const Register = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <RegisterContainer>
        <Title>Register</Title>
        <Form>
          <Item>
            <Label>Full Name</Label>
            <Input type='text' placeholder="John Doe" />
          </Item>
          <Item>
            <Label>Email Address</Label>
            <Input type='email' placeholder="Johndoe@gmail.com" />
          </Item>
          <Item>
            <Label>Username</Label>
            <Input type='text' placeholder="johndoe007" />
          </Item>
          <Item>
            <Label>Password</Label>
            <Input type='password' placeholder="********" />
          </Item>
          <Item>
            <Label>Address</Label>
            <Input type='text' placeholder="Leopoldplein 50 3500, Hasselt" />
          </Item>
          <Item>
            <Label>Phone</Label>
            <Input type='text' placeholder="0492 87 87 87" />
          </Item>
          <Button type="submit">Create New Account</Button>
        </Form>
      </RegisterContainer>
      <Footer/>
    </Container>
  )
}

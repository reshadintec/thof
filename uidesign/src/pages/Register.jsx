import styled from "styled-components"

const Container = styled.div`
  
`;

const RegisterContainer = styled.div`
  width: 80%;
  height: 60vh;
  background: rgb(63,13,18);
  background: radial-gradient(circle, rgba(63,13,18,1) 0%, rgba(23,5,5,1) 50%);
  margin: 20px auto;
  color: #e3cb99;
  padding: 20px;
`;


export const Register = () => {
  return (
    <Container>
      
      <RegisterContainer>
        Register Container
      </RegisterContainer>
    </Container>
  )
}

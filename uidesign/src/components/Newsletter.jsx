import { Send,  } from "@mui/icons-material";
import styled from "styled-components"

const Container = styled.div`
  width:80%;
  height: 30vh;
  background: radial-gradient(circle, rgba(63,13,18,1) 10%, rgba(23,5,5,1) 50%);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  margin: 0  auto 10vh ;
`;
const Title = styled.h2`
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 18px;
  color: #cfcfcf;
  margin-bottom: 20px;
  font-weight: 300;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #e3cc9975;
`;
const Input= styled.input`
  background-color: transparent;
  border: none;
  flex: 6;
  color: #e3cb99;
  padding-left: 20px;
  &:focus-visible{
  outline: transparent;
  }
  ::placeholder{
    color:#e3cc9975;
  }
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #bf963f;
  color: white;
  cursor: pointer;
`;


export const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Never miss an offer for a perfume you love!</Desc>
      <InputContainer>
        <Input placeholder="Your email"/>
        <Button>
          <Send/>
        </Button>
      </InputContainer>
    </Container>
  )
}

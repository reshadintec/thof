import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background: #e3cb99;
  color: #670404;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top:0;
  bottom: 0;
  left: ${props=>props.direction === "left" && "10px"};
  right: ${props=>props.direction === "right" && "10px"};
  margin:auto;
  cursor: pointer;
  z-index: 10;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Slide = styled.div`
  position:relative;
  width: 100vw;
  align-items: center;

`;

const ImageContainer = styled.div`
  
`;

const Image = styled.img`
  width: 100%;
  height: calc(100vh - 120px);
  object-fit: cover;
`;
const InfoContainer = styled.div`
  position: absolute;
  max-width: 50vw;
  top: 20%;
  left:12%;
  color:white;
`;

const Title = styled.h2`
  font-size: 48px;
  color: white;
  font-weight: 600;
  line-height: 1.5;
  text-transform: uppercase;
`;

const Line = styled.hr`
  width:25%;
  margin: 30px 0;
  border-color: #e3cb99;
`;

const Paragraph = styled.p`
  max-width: 80%;
  line-height: 1.8;
  font-size: 18px;
`;

const Button = styled.button`
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    color: #FFFFFF;
    background-color: #bf963f;
    border-radius: 10px;
    border: none;
    padding: 22px 36px 22px 36px;
    margin: 40px 0;
`;
export const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper>
        <Slide>
          <ImageContainer>
            <Image src="https://tm.thehouseoffragrance.com/wp-content/uploads/sites/17/2022/10/Clive_Christian_Slider.webp"/>
          </ImageContainer>
          <InfoContainer>
            <Title>
              Welcome to the<br/> house of fragrance
            </Title>
            <Line/>
            <Paragraph>
              Where you can find great choices on our large selection of branded perfumes and cosmetics.
            </Paragraph>
            <Button>Learn More</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined/>
      </Arrow>
      
    </Container>
  )
}

import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
  display: flex;
  position: relative;
`;

const Arrow= styled.div`
  width: 50px;
  height: 50px;
  background: #e3cc9975;
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
  opacity: 0.8;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  flex:1;
`;

const Image = styled.img`
  object-fit: contain;
  position: center center;
`;
const InfoContainer = styled.div`
  flex:1;
`
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
          <InfoContainer></InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined/>
      </Arrow>
      
    </Container>
  )
}

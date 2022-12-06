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
  color: #170505;
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
  top: 50%;
  left:10%;
  color:white;
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
          <InfoContainer>
            <h2>Title of Cotainer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit fugit maxime nostrum obcaecati commodi unde facere in? Cupiditate, magni.</p>
            <button>Click here</button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined/>
      </Arrow>
      
    </Container>
  )
}

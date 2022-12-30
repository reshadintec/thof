import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({display: "none"})}
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
  display: flex;
  transition: all 1.2s ease;
  transform: translate(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  position:relative;
  width: 100vw;
  align-items: center;
  background-color: #${props=>props.bg };
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
  font-size: 52px;
  color: white;
  font-weight: 600;
  line-height: 1.5;
  text-transform: uppercase;
  max-width: 70%;
`;

const Line = styled.hr`
  width:25%;
  margin: 2em 0;
  border:none;
  border-bottom: 2px solid #e3cb99;
`;

const Paragraph = styled.p`
  max-width: 70%;
  line-height: 1.8;
  font-size: 18px;
`;

const Button = styled.button`
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    color: #FFFFFF;
    background-color: #bf963f;
    border: none;
    padding: 22px 36px 22px 36px;
    margin: 40px 0;
    cursor: pointer;
`;
export const Slider = () => {

  const [slideIndex, setSlideIndex ] = useState(0);
  const handleClick = (direction)=>{
    if(direction==="left"){
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
    } else{
      setSlideIndex(slideIndex <2 ? slideIndex+1 : 0)
    }
  }
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper slideIndex = {slideIndex}>
        {sliderItems.map((item) =>(     
        <Slide bg={item.bg} key={item.id}>
          <ImageContainer>
            <Image src={item.img}/>
          </ImageContainer>
          <InfoContainer>
            <Title>
              {item.title}
            </Title>
            <Line/>
            <Paragraph>
              {item.desc}
            </Paragraph>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined/>
      </Arrow>
      
    </Container>
  )
}

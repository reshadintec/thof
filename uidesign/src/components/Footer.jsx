import styled from "styled-components";
import LogoSrc from "../assets/GoldGradientmedium.png";
import {FacebookOutlined, Instagram, LinkedIn, Twitter, YouTube} from '@mui/icons-material';
const Container = styled.div`
  height: 40vh;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  padding: 60px 3%;
`;
const Left = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
`;

const Logo= styled.img`
  width: 240px;
  margin-bottom: 30px;
`;

const Desc = styled.p`
  color: white;
  font-weight: 200;
  font-size: 15px;
  line-height: 1.4;
  letter-spacing: 1.8px;
  width: 80%;
  margin-bottom: 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Social = styled.div`
  width: 40px;
  height: 40px;
  background-color: #bf963f;
  margin: 0 10px;
  color:white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  transition: all 0.5s ease;
  &:hover{
    transform: scale(1.2);
  }
  `;



const Center = styled.div`
 flex: 1;
`;
const Right = styled.div`
 flex: 1;
`;



export const Footer = () => (
  <Container>
    <Left>
      <Logo src={LogoSrc} />
      <Desc>
        The House of Fragrance owns multiple chain of modern and safe stocks in most required cities of Central Asian Countries, which includes many niche and ‘hard-to-find’ brands.
      </Desc>
      <SocialIcons>
        <Social>
          <FacebookOutlined/>
        </Social>
        <Social>
          <Instagram />
        </Social>
        <Social>
          <Twitter />
        </Social>
        <Social>
          <LinkedIn/>
        </Social>
        <Social>
          <YouTube />
        </Social>
      </SocialIcons>
    </Left>
    <Center>Center</Center>
    <Right>Right</Right>
  </Container>
)

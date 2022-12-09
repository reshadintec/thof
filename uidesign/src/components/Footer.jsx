import styled from "styled-components";
import LogoSrc from "../assets/GoldGradientmedium.png";
import {FacebookOutlined, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter, YouTube} from '@mui/icons-material';
const Container = styled.div`
  height: 40vh;
  background-color: #0b0b0b;
  display: flex;
  justify-content: space-between;
  padding: 60px 3% 20px;
  @media(min-width: 1440px){
    height: 35vh;
  }
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
  margin-bottom: 30px;
  @media(min-width: 1440px) {
    width: 50%;
  }
`;

const SocialIcons = styled.div`
  display: flex;
`;

const Social = styled.div`
  width: 40px;
  height: 40px;
  background-color: #bf963f;
  margin-right: 20px;
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
 display: flex;
 flex-direction: column;
 flex-wrap: wrap;
 align-content: center;
`;

const Title= styled.h4`
  color: #bf963f;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 8%;
`;

const Link = styled.a`
  color: #e3cb99;
  opacity: 0.6;
  font-size: 18px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover{
    opacity: 1;
    text-decoration: underline;
  }
`;

const Right = styled.div`
 flex: 1;
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const ContactDesc = styled.p`
  color: #e3cb99;
  opacity: 0.8;
  font-weight: 300;
  letter-spacing: 1pt;
  font-size: 15px;
  margin-left: 20px;
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
    <Center>
      <Title>
        Useful Links
      </Title>
      
      <Link>My Account</Link>
      <Link>Orders</Link>
      <Link>Perfumes For Her</Link>
      <Link>Perfumes For Him</Link>
      <Link>Privacy Policy</Link>
      <Link>Refund & Return</Link>
      <Link>T&Cs</Link>
    </Center>
    <Right>
      <Title>
        Contact Details
      </Title>
      <ContactContainer>
        <Room style={{fontSize:"1.8rem", backgroundColor:"#bf963f", padding:"5px", color:"white", cursor:"pointer"}}/>
        <ContactDesc>Some Address in my Town 3500</ContactDesc>
      </ContactContainer>
      <ContactContainer>
        <Phone style={{fontSize:"1.8rem", backgroundColor:"#bf963f", padding:"5px", color:"white", cursor:"pointer"}}/>
        <ContactDesc>+32 (0) 492 92 92 92</ContactDesc>
      </ContactContainer>
      <ContactContainer>
        <MailOutline style={{fontSize:"1.8rem", backgroundColor:"#bf963f", padding:"5px", color:"white", cursor:"pointer"}}/>
        <ContactDesc>mail@thehouseoffragrance.com</ContactDesc>
      </ContactContainer>
    </Right>
  </Container>
)

import styled from "styled-components"
import {FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined} from '@mui/icons-material/';
import { mobile } from "../responsive";

const Info = styled.div`
  opacity: 0;
  position: absolute;
  top:70%;
  right:30%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  @media(min-width: 1440px){
    left:25%;
  };
  ${mobile({right: "10%"})};

`;

const Container = styled.div`
  flex: 1;
  display: flex;
  min-width: 250px;
  height: 280px;
  position: relative;
  padding-bottom: 40px;
  padding-right: 20px;
  &:hover ${Info}{
    opacity: 1;
  }
 
  @media(min-width:1444px){
    padding-bottom: 80px;
    min-width: 380px;
    height: 400px;
  };
`; 
const Image = styled.img`
  border: 1px solid #e3cc9975;
  box-shadow: -4px 4px 9px 1px rgba(122,122,122,0.75);
  -webkit-box-shadow: 1px 4px 9px 1px rgba(122,122,122,0.75);
  -moz-box-shadow: 1px 4px 9px 1px rgba(122,122,122,0.75);
`;

const Icon = styled.div`
  margin: 0 20px;
  padding: 10px;
  background-color: #bf963f;
  cursor: pointer;
  color: white;
  transition: all 0.5s ease;
  &:hover{
    transform: scale(1.1);
  }
`;



export const Product = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Icon>
          <ShoppingCartOutlined/>
        </Icon>
        <Icon>
          <SearchOutlined/>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined/>
        </Icon>
      </Info>
    </Container>
  )
}

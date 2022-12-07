import styled from "styled-components"
import {FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined} from '@mui/icons-material/';

const Info = styled.div`
  opacity: 0;
  position: absolute;
  top:60%;
  left:8%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  @media(min-width: 1400px){
    left:25%;
  }
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  min-width: 260px;
  height: 390px;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
 
  @media(min-width:1400px){
    min-width: 500px;
    height: 650px;
  }
`; 
const Image = styled.img`
  height: 75%;
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

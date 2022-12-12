import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";

const Container = styled.div`
  
`;

const ProductContainer = styled.div`
  background: rgb(63,13,18);
  background: radial-gradient(circle, rgba(63,13,18,1) 0%, rgba(23,5,5,1) 50%);
  padding: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
`
;

const ImageContainer = styled.div`
  flex: 1;
  text-align: center;
`;

const Image = styled.img`
  min-width: 480px;
  height: 50vh;
  object-fit: cover;
  border: 1px solid #e3cc9975;
`;

const InfoContainer = styled.div`
  flex:1;
`;

const Title = styled.h4`
  font-size: 2.5rem;
  color: #e3cb99;
  font-weight: 400;
  margin-bottom: 20px;
`;

const Price = styled.span`
  font-size: 2rem;
  font-weight: 300;
  color: #e3cb99;
  
`;

const Desc = styled.p`
  max-width: 60%;
  color: white;
  font-weight: 200;
  font-size: 15px;
  letter-spacing: 1.8px;
  line-height: 1.8;
  margin: 40px 0;
`;

const AddContainer= styled.div`
  display: flex;
  
`;
const AmountContainer= styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border: 1px solid #e3cc9975;
  margin-right: 20px;
  color:#e3cb99;
`;
const Amount= styled.span`
  font-size: 18px;
`;
const Button= styled.button`
  background-color: #bf963f;
  border:none;
  color:white;
  padding: 10px 30px;
  font-size: 1.2rem;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover{
    background-color: #aa771c;
  }
`;

export const SingleProduct = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <ProductContainer>
        <ImageContainer>
          <Image src="https://uz.thehouseoffragrance.com/wp-content/uploads/sites/2/2022/10/Le-Mat-Mendittorosa-1.webp"></Image>  
        </ImageContainer>
        <InfoContainer>
          <Title>Mendittorosa Le Mat</Title>
          <Price>$250</Price>
          <Desc>A perfume of divination and tarotology.  Le Mat, The Fool and Journeyman. Chance, enigma and propulsion. End and beginning. A card of 0 and XXII.  A powerful icon of the Major Arcana, cards of symbols and numbers that portend future and fate.  We must turn over cards and accept fate, walk forward into new futures, lives and loves. We may not have all the tools for survival, but we have hope and defiance.
         </Desc>
         <AddContainer>
           <AmountContainer>
              <Remove style={{fontSize:"1rem",cursor:"pointer"}}/>
              <Amount>1</Amount>
              <Add style={{fontSize:"1rem",cursor:"pointer"}}/>
           </AmountContainer>
           <Button>ADD TO CART</Button>
         </AddContainer>
        </InfoContainer> 
      </ProductContainer>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

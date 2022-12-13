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
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
  @media(min-width: 1444px){
    padding:220px;
  }
`
;

const ImageContainer = styled.div`
  flex: 1;
  text-align: center;
`;

const Image = styled.img`
  min-width: 500px;
  height: 500px;
  object-fit: cover;
  border: 1px solid #e3cc9975;
  @media(min-width: 1444px){
    min-width: 480px;
    height: 50vh;
  }
`;

const Line = styled.hr`
  width: 70%;
  margin: 20px 0;
  border: none;
  border-bottom: 2px solid #e3cc9975;
  @media(min-width: 1444px){
    width: 58%;
  }
`;


const InfoContainer = styled.div`
  flex:1;
  margin-left: 10%;
  @media(min-width: 1444px){
  margin-left: 0;
  }
`;

const Title = styled.h4`
  font-size: 2.5rem;
  color: #e3cb99;
  font-weight: 400;
  margin-bottom: 10px;
`;

const Price = styled.span`
  font-size: 2rem;
  font-weight: 300;
  color: #e3cb99;
  
`;

const Desc = styled.p`
  max-width: 95%;
  color: white;
  font-weight: 200;
  font-size: 15px;
  letter-spacing: 1.8px;
  line-height: 1.8;
  /* margin: 40px 0; */
  @media(min-width: 1444px){
  max-width: 60%;
  }
`;

const ProductInfo=styled.div`
  display: flex;
  align-items: center;
  
`;

const InfoTitle= styled.h6`
  color: lightgray;

`;

const InfoDesc = styled.h4`
  color: white;
  margin:0  20px 0 10px;`;

const AddContainer= styled.div`
  display: flex;
  margin-top: 40px;
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
  padding: 5px 10px;
  font-size: 1.2rem;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover{
    background-color: #aa771c;
  }
`;

const BrandName = styled.h4`
  
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
          <Line/>
          <Desc>A perfume of divination and tarotology.  Le Mat, The Fool and Journeyman. Chance, enigma and propulsion. End and beginning. A card of 0 and XXII.  A powerful icon of the Major Arcana, cards of symbols and numbers that portend future and fate.  We must turn over cards and accept fate, walk forward into new futures, lives and loves.
         </Desc>
         <Line/>
         <ProductInfo>
            <InfoTitle>Gender:</InfoTitle>
            <InfoDesc>Unisxex</InfoDesc>
            <InfoTitle>Size:</InfoTitle>
            <InfoDesc>120 ml</InfoDesc>
         </ProductInfo>
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

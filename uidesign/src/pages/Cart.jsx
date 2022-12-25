import styled from "styled-components";
import Announcement from "../components/Announcement";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const CartContainer = styled.div`
  padding: 20px;
  height: 85vh;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 300;
  font-size: 36px;
  margin-bottom: 20px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopButton = styled.button`
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  border: ${props=>props.type==="filled" && "none"};
  background-color: ${props=>props.type === "filled" && "#bf963f"};
  padding: ${props=> props.type === "filled" && "10px 20px"};
  color: ${props=>props.type === "filled" && "#fffbd2"};
  transition: all 1s ease;
  &:hover{
    background-color: ${props=>props.type === "filled" && "#aa771c"};
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
`;
const Info = styled.div`
  flex: 3;
`;

const  Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const  ProductDetail = styled.div`
  display: flex;
  align-items: center;
`;
const  Image = styled.img`
  width: 300px;
  margin-right: 20px;
`;
const  Details = styled.div``;
const  ProductName = styled.div``;
const  ProductSize = styled.div``;
const  ProductGender = styled.div``;
const  ProductStrength = styled.div``;
const  PriceDetail = styled.div``; 



const Summary = styled.div`
  flex:1 ; 
`;

export const Cart = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <CartContainer>
       <Title>Shopping Cart</Title>
       <Top>
        <TopButton>Continue Shopping</TopButton>
        <TopButton type="filled">Checkout Now</TopButton>
       </Top>
       <Bottom>
        <Info>
          <Product>
            <ProductDetail>
              <Image src="https://uz.thehouseoffragrance.com/wp-content/uploads/sites/2/2022/10/Masque-Milano-Tango.webp"/>
              <Details>
                <ProductName>
                  <b>Product: </b>
                  Masque Milano Tango
                </ProductName>
                <ProductSize>
                  <b>Size: </b>
                  35 ml
                </ProductSize>
                <ProductGender>
                  <b>Gender: </b>
                  Unisex
                </ProductGender>
                <ProductStrength>
                  <b>Strength: </b>
                  Eau De Parfum
                </ProductStrength>
              </Details>
            </ProductDetail>
            <PriceDetail>
              Price
            </PriceDetail>
          </Product> 
        </Info>
        <Summary>
          Summary
        </Summary>
       </Bottom>
      </CartContainer>
      <Footer/>
    </Container>
  )
}

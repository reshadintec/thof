import { Add, Close, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const CartContainer = styled.div`
  padding: 20px;
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
  padding: ${props=> props.type === "filled" && "14px 20px"};
  color: ${props=>props.type === "filled" && "#fffbd2"};
  background-color: ${props=>props.type === "simple" && "transparent"};
  transition: all 1s ease;
  &:hover{
    background-color: ${props=>props.type === "filled" && "#aa771c"};
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0;
  height: 100%;
`;
const Info = styled.div`
  flex: 3;
  display: flex;
 flex-wrap: wrap;
  flex-direction: column;
  margin-right: 40px;
  padding: 40px;
  background: radial-gradient(circle, rgba(63,13,18,1) 0%, rgba(23,5,5,1) 50%);
  color: #e3cb99;
  height: auto;
`;

const Titles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const SingleTitle = styled.span`
  font-size: 12px;
  color: gray;
  flex-direction: column;
  text-align:center;
  flex: 1;
  &:first-child{
    flex:2;
    text-align: left;
  }
`;
const  Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductItem = styled.div`
  flex:1;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: column;
  align-content: center;
  &:first-child{
    flex:2;
  };
  &:first-child{
   flex-direction: row;
  }
`;

const  Image = styled.img`
  width: 60px;
  margin-right: 20px;
  border: 1px solid #e3cc9975;
`;

const ProductTitle = styled.h4`
  font-weight: 400;
`;

const ProductText = styled.h4`
  font-weight: 300;
  margin: ${props=> props.kind === "qty" && "0 10px"};
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Summary = styled.div`
  flex:1 ;
  padding: 40px;
  flex-wrap: wrap;
  background: radial-gradient(circle, rgba(63,13,18,1) 0%, rgba(23,5,5,1) 50%);
  color: #fffbd2;
  height: 100%;
`;

const Line = styled.hr`
  width: 100%;
  margin: 20px 0;
  border: none;
  border-bottom: 1.5px solid #84848475;
`;

const SummaryDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const OrderSummary = styled.h2`
  font-weight: 300;
  margin-bottom: 40px;
`;

const Total = styled.h2`
  font-weight: 300;
  `;

const Button = styled.button`
  width: 100%;
  margin-top: 50px;
  background-color: #e3cb99;
  border: none;
  padding: 10px 0;
  cursor: pointer; 
  color: #170505;
  transition: all 0.6s ease;
  &:hover{
    background-color: #bf963f;
  }
`;

export const Cart = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <CartContainer>
       <Title>Shopping Cart</Title>
       <Top>
        <TopButton type="simple">Continue Shopping</TopButton>
        <TopButton type="filled">Checkout Now</TopButton>
       </Top>  
       <Bottom>
        <Info>
          <Titles>
            <SingleTitle>ITEM</SingleTitle>
            <SingleTitle>PRICE</SingleTitle>
            <SingleTitle>QUANTITY</SingleTitle>
            <SingleTitle>REMOVE</SingleTitle>
          </Titles>
          <Product>
             <ProductItem>
              <Image src="https://uz.thehouseoffragrance.com/wp-content/uploads/sites/2/2022/10/Masque-Milano-Tango.webp"/>
              <ProductTitle>Masque Milano Tango</ProductTitle>
             </ProductItem>
             <ProductItem>
              <ProductText>$ 132</ProductText>
             </ProductItem>
             <ProductItem>
              <PriceContainer>
                <Remove sx={{fontSize: "16px",cursor:"pointer"}}/>
                <ProductText kind="qty">1</ProductText>
                <Add sx={{fontSize: "16px",cursor:"pointer"}}/>
              </PriceContainer>
             </ProductItem>
             <ProductItem><Close sx={{fontSize: "20px",cursor:"pointer"}}/></ProductItem>
          </Product> 
          <Line/>
          <Product>
             <ProductItem>
              <Image src="https://uz.thehouseoffragrance.com/wp-content/uploads/sites/2/2022/10/Masque-Milano-Tango.webp"/>
              <ProductTitle>Masque Milano Tango</ProductTitle>
             </ProductItem>
             <ProductItem>
              <ProductText>$ 132</ProductText>
             </ProductItem>
             <ProductItem>
              <PriceContainer>
                <Remove sx={{fontSize: "16px",cursor:"pointer"}}/>
                <ProductText kind="qty">1</ProductText>
                <Add sx={{fontSize: "16px",cursor:"pointer"}}/>
              </PriceContainer>
             </ProductItem>
             <ProductItem><Close sx={{fontSize: "20px",cursor:"pointer"}}/></ProductItem>
          </Product> 
          <Line/>
        </Info>
        <Summary>
          <OrderSummary>Order Summary</OrderSummary>
          <SummaryDetails>
            <ProductText>Subtotal</ProductText>
            <ProductText>$132</ProductText>
          </SummaryDetails>
          <SummaryDetails>
            <ProductText>Estimated Shipping</ProductText>
            <ProductText>$6.70</ProductText>
          </SummaryDetails>
          <SummaryDetails>
            <ProductText>Shipping Discount</ProductText>
            <ProductText>-6.70</ProductText>
          </SummaryDetails>
          <SummaryDetails style={{marginTop:"40px"}}>
            <Total>Total</Total>
            <ProductText style={{fontSize:"24px"}}>$80</ProductText>
          </SummaryDetails>
          <Button>PROCEED TO CHECKOUT</Button>
        </Summary>
       </Bottom>
      </CartContainer>
      <Footer/>
    </Container>
  )
}

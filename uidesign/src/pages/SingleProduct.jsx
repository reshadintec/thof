import { Add, Remove } from "@mui/icons-material";
import { useState , useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import { addProduct } from "../redux/cartRedux";
import { publicRequest } from "../requestMethod";
import { useDispatch } from "react-redux";

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
  width: 95%;
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
  font-weight: 300;
  margin-bottom: 10px;
`;

const Price = styled.span`
  font-size: 2rem;
  font-weight: 200;
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

const InfoTitle= styled.h4`
  color: lightgray;
  font-weight: 300;
  
`;

const InfoDesc = styled.h4`
  color: white;
  margin:0  40px 0 10px;
  font-weight: 200;
  `;

const AddContainer= styled.div`
  display: flex;
  margin-top: 40px;
`;
const AmountContainer= styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  border: 1px solid #e3cc9975;
  margin-right: 40px;
  color:#e3cb99;
`;
const Amount= styled.span`
  font-size: 18px;
`;
const Button= styled.button`
  background-color: #bf963f;
  border:none;
  color:white;
  padding: 15px 40px;
  font-size: 1.2rem;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover{
    background-color: #aa771c;
  }
`;



export const SingleProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity})
    );
  };
  return (
    <Container>
      <Announcement />
      <Navbar />
      <ProductContainer>
        <ImageContainer>
          <Image src={product.img}></Image>  
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Price>$ {product.price}</Price>
          <Line/>
          <Desc>{product.desc}
         </Desc>
         <Line/>
         <ProductInfo>
            <InfoTitle>Gender:</InfoTitle>
            <InfoDesc>{product.gender}</InfoDesc>
            <InfoTitle>Size:</InfoTitle>
            <InfoDesc>{product.size}</InfoDesc>
            <InfoTitle>Strength:</InfoTitle>
            <InfoDesc>{product.strength}</InfoDesc>
         </ProductInfo>
         <Line/>
         <AddContainer>
           <AmountContainer>
              <Remove style={{fontSize:"1rem",cursor:"pointer"}} onClick={() => handleQuantity("dec")}/>
              <Amount>{quantity}</Amount>
              <Add style={{fontSize:"1rem",cursor:"pointer"}} onClick={() => handleQuantity("inc")}/>
           </AmountContainer>
           <Button onClick={handleClick}>ADD TO CART</Button>
         </AddContainer>
        </InfoContainer> 
      </ProductContainer>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

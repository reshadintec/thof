import styled from "styled-components";
import { poplularProducts } from "../data";
import { Product } from "./Product";
import {mobile} from "../responsive"

const MainContainer= styled.div`
  margin: 20px 0 100px ;
  padding: 20px 0;
  background: radial-gradient(circle, rgba(63,13,18,1) 0%, rgba(23,5,5,1) 50%);
`

const Cotainer = styled.div`
  margin: 0 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  ${mobile({gridTemplateColumns: "1fr",margin:"0 auto"})};
  @media(min-width:1444px){
    margin-bottom:;
  };
  
`;

const Title= styled.h2`
  font-size: 3.5rem;
  font-weight: 500;
  margin: 20px auto;
  text-align: center;
  color:white;
  ${mobile({fontSize: "2rem"})};

`;

const Line = styled.hr`
  width:15%;
  margin: 0 auto 4em;
  border:none;
  border-bottom: 2px solid #e3cb99;
`

export const Products = (props) => {
  return (
    <MainContainer>
    <Title>{props.title}</Title>
    <Line></Line>
    <Cotainer>
      {poplularProducts.map((item) =>(
        <Product item={item} key={item.id}/>
      ))}
    </Cotainer>
    </MainContainer>
  )
}

import styled from "styled-components";
import { poplularProducts } from "../data";
import { Product } from "./Product";
import {mobile} from "../responsive"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const MainContainer= styled.div`
  margin: 20px 0 100px ;
  padding: 20px 0;
  background: radial-gradient(circle, rgba(63,13,18,1) 0%, rgba(23,5,5,1) 50%);
   ${mobile({margin: "20px 0 40px"})};
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

export const Products = ({gender,filters, sort, title}) => {
  const [products,setProducts] = useState([]);
  const [filteredProducts,setFilteredProducts] = useState([]);
  
  useEffect(()=>{
    const getProducts = async ()=>{
      try{
        const res = await axios.get(
          gender
          ?`http://localhost:5001/api/products?gender=${gender}`
          :"http://localhost:5001/api/products")
        setProducts(res.data);
      }catch(err){

      }
    };
    getProducts();
  },[gender]);

  useEffect(() => {
    gender &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, gender, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <MainContainer>
    <Title>{title}</Title>
    <Line></Line>
    <Cotainer>
      {gender
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Cotainer>
    </MainContainer>
  )
}

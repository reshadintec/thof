import styled from "styled-components";
import { poplularProducts } from "../data";
import { Product } from "./Product";

const Cotainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  margin-left: 30px;
  flex-wrap: wrap;
`;

export const Products = () => {
  return (
    <Cotainer>
      {poplularProducts.map((item) =>(
        <Product item={item} key={item.id}/>
      ))}
    </Cotainer>
  )
}

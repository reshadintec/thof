import styled from "styled-components";
import Announcement from "../components/Announcement";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import { Products } from "../components/Products";

const Cotainer = styled.div`
`;
const ShopContainer = styled.div`
  margin: 10px 5%;
`;

const Title = styled.h2` `;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div` `;


export const Shop = () => {
  return (
    <Cotainer>
      <Announcement/>
      <Navbar/>
      <ShopContainer>
      <Title>Perfumes</Title>
      <FilterContainer>
        <Filter>Filter</Filter>
        <Filter>Filter2</Filter>
      </FilterContainer>
      </ShopContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Cotainer>
  )
}

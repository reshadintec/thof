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

const Title = styled.h2`
  font-size: 3rem;
  margin: 20px 0;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`

`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

export const Shop = () => {
  return (
    <Cotainer>
      <Announcement/>
      <Navbar/>
      <ShopContainer>
      <Title>Shop</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>Size</Option>
            <Option>30 ml</Option>
            <Option>35 ml</Option>
            <Option>50 ml</Option>
            <Option>75 ml</Option>
            <Option>100 ml</Option>
            <Option>120 ml</Option>
          </Select>
          <Select>
            <Option disabled selected>Gender</Option>
            <Option>Men</Option>
            <Option>Women</Option>
            <Option>Unisex</Option>
          </Select>   
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Featured</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      </ShopContainer>
      <Products title="Products"/>
      <Newsletter/>
      <Footer/>
    </Cotainer>
  )
}

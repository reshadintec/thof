import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import { Products } from "../components/Products";
import { mobile } from "../responsive";

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
  font-weight: 400;
  margin-right: 20px;
   ${mobile({fontSize:"14px"})};
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({padding:"2px",marginTop:"5px"})};

`;
const Option = styled.option``;

export const Shop = () => {
  const location = useLocation();
  const gender = location.pathname.split("/")[2];
  const [filters,setFilters] = useState({});
  const [sort,setSort] = useState("newest");

  const handleFilters = (e)=>{
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Cotainer>
      <Announcement/>
      <Navbar/>
      <ShopContainer>
      <Title>Shop</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="size" onChange={handleFilters}>
            <Option disabled >Size</Option>
            <Option>30 ml</Option>
            <Option>35 ml</Option>
            <Option>50 ml</Option>
            <Option>75 ml</Option>
            <Option>100 ml</Option>
            <Option>120 ml</Option>
          </Select>
          <Select name="gender" onChange={handleFilters}>
            <Option disabled >Gender</Option>
            <Option>Men</Option>
            <Option>Women</Option>
            <Option>Unisex</Option>
          </Select>   
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest" >Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      </ShopContainer>
      <Products gender={gender} filters={filters} sort={sort} title="Products"/>
      <Newsletter/>
      <Footer/>
    </Cotainer>
  )
}

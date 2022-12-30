import styled from 'styled-components';
import { categories } from '../data'
import { mobile } from '../responsive';
import { CategoryItem } from './CategoryItem';

const Container = styled.div`
  display: flex;
  margin: 80px 75px 100px; 
  justify-content: space-between;
  align-items: center;
  ${mobile({flexDirection: "column", margin: "20px 40px"})}
`;

export const Categories = () => {
  return (
    <Container>
      {categories.map(item=>(
        <CategoryItem item ={item} key={item.id}/>
      ))}
    </Container>
  )
}

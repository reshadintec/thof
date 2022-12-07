import styled from 'styled-components';
import { categories } from '../data'
import { CategoryItem } from './CategoryItem';

const Container = styled.div`
  display: flex;
  padding: 20px 40px; 
  justify-content: space-between;
  align-items: center;
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

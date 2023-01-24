import styled from "styled-components"
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
const Container = styled.div `
  flex:1;
  margin:20px;
  position: relative;
  ${mobile({margin:"14px 0"})}
`;
const Image = styled.img `
  width: 100%;
  object-fit: cover;
`;
const Info = styled.div `
  position: absolute;
  top:25%;
  left:0;
  width:100%;
  height: 100%;
  display: flex;

  align-items: center;
  justify-content: center;
`;
const Title = styled.h4 `
  font-size: 20px;
  background-color: #bf963fbc;
  color:white;
  padding: 15px 20px;
  cursor: pointer;
  &&:hover{
    background-color: #bf963f;
    text-decoration:underline;
  }
`;



export const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title><Link to={`/shop/${item.cat}`}
        style={{color:"white",textDecoration:"none"}}
        >{item.title}</Link></Title>
      </Info>
    </Container>
  )
}

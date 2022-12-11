import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";

const Container = styled.div`

`;

const ProductContainer = styled.div`
  margin: 10px 5%;
`
;

export const SingleProduct = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <ProductContainer>
        <ImageContainer>
          <Image src="https://uz.thehouseoffragrance.com/wp-content/uploads/sites/2/2022/10/Le-Mat-Mendittorosa-1.webp"></Image>  
        </ImageContainer> 
      </ProductContainer>
      <Newsletter/>
    </Container>
  )
}

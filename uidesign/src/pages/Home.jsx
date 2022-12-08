import React from 'react'
import Announcement from '../components/Announcement'
import { Categories } from '../components/Categories'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import { Newsletter } from '../components/Newsletter'
import { Products } from '../components/Products'
import { Slider } from '../components/Slider'
import styled from 'styled-components'

const Container = styled.div`
  
`

const Home = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Home
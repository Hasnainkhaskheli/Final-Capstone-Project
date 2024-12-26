import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import CategoryBar from '../home/category-bar/CategoryBar'
import EarbudGallery from '../home/earbud-gallery/EarbudGallery'
import ProductWithMedia from '../home/product-with-media/ProductWithMedia'
import { Box } from '@mui/material'
import BestSellers from '../home/best-sellers/BestSellers'
import SmartWatches from '../home/SmartWatches/SmartWatches'
import MobilesLatest from '../home/Mobile-lastest/MobileLatest'
import BrandsIcon from '../home/BrandsIcon'
import Footer from '../Footer/footer'
import ShopPrice from '../Shopprice/shopprice'

const Home = () => {
  return (
   <>
    <Box className="!bg-slate-100">
      <CategoryBar/>
      <HeroSection/>
      <EarbudGallery/>
      <ProductWithMedia/>
      <BestSellers/>
    
    </Box>

    <SmartWatches />
    <MobilesLatest/>
    <ShopPrice/>
    <BrandsIcon/>
    <Footer/>
   
        
   </>
   
  )
}

export default Home;
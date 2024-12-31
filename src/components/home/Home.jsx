import React from 'react'
import HeroSection from '../home/HeroSection/HeroSection'
import CategoryBar from '../home/category-bar/CategoryBar'
import EarbudGallery from '../home/earbud-gallery/EarbudGallery'
import ProductWithMedia from '../home/product-with-media/ProductWithMedia'
import { Box } from '@mui/material'
import BestSellers from '../home/best-sellers/BestSellers'
import SmartWatches from '../home/SmartWatches/SmartWatches'
import MobilesLatest from '../home/LatestMobiles/LatestMobiles'
import BrandsIcon from '../home/BrandsIcon'
import Footer from '../Footer/footer'
import ShopPrice from '../Shopprice/shopprice'
import ProductSection from './Product_Section/ProductSection'
import ReasonToBuy from '../home/Reason-To-Buy/reasonToBuy'
import CustomerReviews from '../home/CustomerReviews/CustomerReview'

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
    <CustomerReviews/>
    <ReasonToBuy/>
    <ProductSection/>
    <BrandsIcon/>
    <Footer/>
   
        
   </>
   
  )
}

export default Home;
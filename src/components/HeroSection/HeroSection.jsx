import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import backgroundImage01 from '../../assets/pakistan-priceoye-slider-01.jpg';
import backgroundImage02 from '../../assets/pakistan-priceoye-slider-02.jpg';
import backgroundImage03 from '../../assets/pakistan-priceoye-slider-03.jpg';
import backgroundImage04 from '../../assets/pakistan-priceoye-slider-04.jpg';
import backgroundImage05 from '../../assets/pakistan-priceoye-slider-05.jpg';
import backgroundImage06 from '../../assets/pakistan-priceoye-slider-06.jpg';
import StaticBannerDesktop from '../../assets/sale-campaign-banner-2k4un.gif';

// Assets images imports
import mobiles from "../../assets/mobiles.svg";
import earbuds from "../../assets/wireless-earbuds.svg";
import watches from "../../assets/smart-watches.svg";
import trimmers from "../../assets/trimmers-shaver.svg";
import powerbanks from "../../assets/power-banks.svg";
import chargers from "../../assets/mobile-chargers.svg";
import speakers from "../../assets/bluetooth-speakers.svg";
import tablets from "../../assets/tablets.svg";

// Category Data
const categories = [
  { name: "Mobiles", image: mobiles },
  { name: "Wireless Earbuds", image: earbuds },
  { name: "Smart Watches", image: watches },
  { name: "Trimmers Shaver", image: trimmers },
  { name: "Power Banks", image: powerbanks },
  { name: "Wall Chargers", image: chargers },
  { name: "Bluetooth Speakers", image: speakers },
  { name: "Tablets", image: tablets },
];

// HeroSection Component
const HeroSection = () => {
  return (
    <>
    <Box sx={{ mt: 3, mb: 3, px: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        {categories.map((category, index) => (
          <Grid
            item
            key={index}
            xs={6}
            sm={4}
            md={3}
            lg={1.5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box
              component="img"
              src={category.image}
              alt={category.name}
              sx={{
                width: { xs: "50px", sm: "60px", md: "70px" },
                height: { xs: "50px", sm: "60px", md: "70px" },
                objectFit: "contain",
                mb: 1,
              }}
            />
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: { xs: "0.7rem", sm: "0.8rem" } }}
            >
              {category.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ width: '100%', height: '100%', margin: '0 auto' }}>
        <Carousel
          autoPlay
          interval={5000}
          infiniteLoop
          showArrows={false}
          showThumbs={false}
          showStatus={false}
        >
          {[backgroundImage01, backgroundImage02, backgroundImage03, backgroundImage04, backgroundImage05, backgroundImage06].map((image, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                width: '100%',
                height: 450,
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </Carousel>
      </Box>
    </Box>
    
    <Box id="static-banner" sx={{ width: '100%' }}>
      <img
        src={StaticBannerDesktop}
        alt="sale-banner"
        style={{ width: '100%' }}
      />
    </Box>
    </>
  );
};

export default HeroSection;



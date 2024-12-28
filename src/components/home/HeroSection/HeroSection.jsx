import React from 'react';
import { Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import backgroundImage01 from '../../../assets/pakistan-priceoye-slider-01.jpg';
import backgroundImage02 from '../../../assets/pakistan-priceoye-slider-02.jpg';
import backgroundImage03 from '../../../assets/pakistan-priceoye-slider-03.jpg';
import backgroundImage04 from '../../../assets/pakistan-priceoye-slider-04.jpg';
import backgroundImage05 from '../../../assets/pakistan-priceoye-slider-05.jpg';
import backgroundImage06 from '../../../assets/pakistan-priceoye-slider-06.jpg';
import StaticBannerDesktop from '../../../assets/sale-campaign-banner-2k4un.gif';

const HeroSection = () => {
  return (
    <>
      <Box sx={{ mt: 3, mb: 3, px: 2 }}>
        <Box sx={{ width: '100%', height: '100%', margin: '0 auto' }}>
          <Carousel
            autoPlay
            interval={5000}
            infiniteLoop
            showArrows
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
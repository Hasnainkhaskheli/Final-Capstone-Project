import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper';
import { useNavigate } from 'react-router-dom';
import productsData from '../Product_Section/productsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import { Box } from '@mui/material';

const ProductSection = () => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <Box bgcolor="#FF1493" py={8}>
      <Box className="container" mx="auto" px={4}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={6}>
          <Box component="h2" fontSize="2xl" fontWeight="bold" color="white">
            Latest Wireless Earbuds
          </Box>
          <Box
            component="button"
            bgcolor="white"
            color="black"
            px={4}
            py={2}
            borderRadius="8px"
            className="hover:bg-gray-100"
          >
            View All
          </Box>
        </Box>

        <Swiper
          spaceBetween={15}
          modules={[Grid, Navigation]}
          navigation
          grid={{
            rows: 2,
            fill: 'row',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="h-[800px]"
        >
          {productsData.map((product) => (
            <SwiperSlide key={product.id}>
              <Box
                onClick={() => handleProductClick(product.id)}
                bgcolor="white"
                borderRadius="8px"
                mx={3}
                className="lw-72 lpx-5 cursor-pointer drop-shadow-lg"
                height={350}
                display="flex"
                flexDirection="column"
              >
                <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
                  <Box
                    component="img"
                    src={product.image}
                    alt={product.name}
                    className="w-28"
                  />
                  <Box component="h3" textAlign="center" mt={2}>
                    {product.name}
                  </Box>
                  <Box display="flex" alignItems="center" gap={2} mt={2}>
                    <FontAwesomeIcon className="text-[#FFC61C]" icon={faStar} />
                    <Box>{product.rating}</Box>
                    <Box color="gray">{product.reviews} Reviews</Box>
                  </Box>
                </Box>
                <Box mt="auto" mb={4} textAlign="center">
                  <Box component="span" fontSize="lg" fontWeight="bold">
                    Rs {product.currentPrice.toLocaleString()}
                  </Box>
                  <Box
                    component="span"
                    color="gray"
                    textDecoration="line-through"
                    ml={2}
                  >
                    Rs {product.originalPrice.toLocaleString()}
                  </Box>
                  <Box component="span" color="green" ml={2}>
                    {product.discount}% OFF
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default ProductSection;
// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Box, Typography } from "@mui/material";

const CategoryBar = () => {
  const product = [
    { id: 1, image: "https://static.priceoye.pk/images/home/mobiles.svg", title: "Mobiles" },
    { id: 2, image: "https://static.priceoye.pk/images/home/wireless-earbuds.svg", title: "Wireless Earbuds" },
    { id: 3, image: "https://static.priceoye.pk/images/home/smart-watches.svg", title: "Smart Watches" },
    { id: 4, image: "https://static.priceoye.pk/images/home/trimmers-shaver.svg", title: "Trimmers Shaver" },
    { id: 5, image: "https://static.priceoye.pk/images/home/power-banks.svg", title: "Power Banks" },
    { id: 6, image: "https://static.priceoye.pk/images/home/mobile-chargers.svg", title: "Wall Chargers" },
    { id: 7, image: "https://static.priceoye.pk/images/home/bluetooth-speakers.svg", title: "Bluetooth Speakers" },
    { id: 8, image: "https://static.priceoye.pk/images/home/tablets.svg", title: "Tablets" },
    { id: 9, image: "https://static.priceoye.pk/images/home/laptops.svg", title: "Laptops" },
  ];

  return (
    <Box className="pb-4 bg-slate-100 flex justify-center items-center">
      <Box className="py-2 bg-white w-full max-w-screen-xl relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".categorybar-next-btn", // Scoped to CategoryBar
          }}
          slidesPerView={8}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 3, spaceBetween: 8 },
            480: { slidesPerView: 3, spaceBetween: 15 },
            768: { slidesPerView: 5, spaceBetween: 20 },
            1024: { slidesPerView: 8, spaceBetween: 25 },
          }}
          className="mySwiper container mx-auto"
        >
          {product.map((item) => (
            <SwiperSlide key={item.id}>
              <Box className="flex flex-col justify-center items-center">
                <img
                  className="object-contain w-12 h-12"
                  src={item.image}
                  alt={item.text}
                />
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  {item.title}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Right Arrow Button */}
        <Box
          className="categorybar-next-btn"
          sx={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            backgroundColor: "#fff",
            borderRadius: "50%",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          ▶
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryBar;

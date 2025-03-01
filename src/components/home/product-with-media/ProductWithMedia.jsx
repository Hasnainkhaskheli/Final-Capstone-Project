import { Box, Tooltip, Typography, Zoom } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductWithMedia = () => {
  const product = [
    {
      id: 1,
      image:
        "https://images.priceoye.pk/redmi-watch-5-lite-pakistan-priceoye-yxck2.jpeg",
      video:
        "https://images.priceoye.pk/influencer_thumbnail_videos/influencer-thumbnail-video-3uenz.mp4",
      title: "Redmi Watch 5 Lite ",
      currentPrice: 12399,
      originalPrice: 15999,
      discountPercentage: 23,
      rating: 4.8,
      reviews: 4,
    },
    {
      id: 2,
      image:
        "https://images.priceoye.pk/zero-royale-smartwatch-pakistan-priceoye-t1ijh.jpg",
      video:
        "https://images.priceoye.pk/influencer_thumbnail_videos/influencer-thumbnail-video-m38jh.mp4",
      title: "Anker A30i ANC Wireless Bluetooth Earbuds A3958H21 ",
      currentPrice: 7243,
      originalPrice: 9000,
      discountPercentage: 20,
      rating: 5.0,
      reviews: 18,
    },
    {
      id: 3,
      image:
        "https://images.priceoye.pk/js-watch-6-classic-with-rotating-bezel-pakistan-priceoye-x5y42.jpg",
      video:
        "https://images.priceoye.pk/influencer_thumbnail_videos/influencer-thumbnail-video-ia1m1.mp4",
      title: "JS Watch 6 Classic SmartWatch ",
      currentPrice: 4799,
      originalPrice: 6500,
      discountPercentage: 26,
      rating: 5.0,
      reviews: 32,
    },
    {
      id: 5,
      image:
        "https://images.priceoye.pk/zero-royale-smartwatch-pakistan-priceoye-t1ijh.jpg",
      video:
        "https://images.priceoye.pk/influencer_thumbnail_videos/influencer-thumbnail-video-kjc36.mp4",
      title: "Zero Royale SmartWatch ",
      currentPrice: 11999,
      originalPrice: 31999,
      discountPercentage: 63,
      rating: 4.8,
      reviews: 8,
    },
    {
      id: 6,
      image:
        "https://images.priceoye.pk/huawei-band-9-pakistan-priceoye-9kqv0.jpg",
      video:
        "https://images.priceoye.pk/influencer_thumbnail_videos/influencer-thumbnail-video-fnl90.mp4",
      title: "HUAWEI Band 9",
      currentPrice: 9399,
      originalPrice: 20000,
      discountPercentage: 53,
      rating: 5.0,
      reviews: 9,
    },
    {
      id: 7,
      image:
        "https://images.priceoye.pk/anker-r50i-earbuds-pakistan-priceoye-csv44.jpg",
      video:
        "https://images.priceoye.pk/influencer_thumbnail_videos/influencer-thumbnail-video-an2ql.mp4",
      title: "Anker R50i Earbuds ",
      currentPrice: 4611,
      originalPrice: 7199,
      discountPercentage: 36,
      rating: 4.7,
      reviews: 30,
    },
    {
      id: 9,
      image:
        "https://images.priceoye.pk/airpods-4-active-noise-cancellation-pakistan-priceoye-uz620.jpeg",
      video:
        "https://images.priceoye.pk/influencer_thumbnail_videos/influencer-thumbnail-video-h7lob.mp4",
      title: "Apple AirPods 4 Active Noise Cancellation ",
      currentPrice: 56499,
      originalPrice: 95999,
      discountPercentage: 41,
      rating: 5.0,
      reviews: 3,
    },
  ];

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      py={8}
      sx={{ background: "#f9f9f9" }}
    >
      <Box className="w-full py-20 px-4 lg:w-4/5">
        <Box className="text-center mb-8">
          <Typography className="!text-xl !font-semibold text-[#3a3b3a]">
            Loved and Recommended
          </Typography>
          <Typography className="!text-md text-[#4d4e4d]">
            Influencers talk about priceoye as a trusted brand
          </Typography>
        </Box>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="mySwiper container mx-auto px-3"
          modules={[Pagination]}
          pagination={{ clickable: true }}
          centeredSlides={true}
          grabCursor={true}
          loop={true}
        >
          {product.map((item) => (
            <SwiperSlide
              key={item.id}
              className="bg-white rounded-2xl w-full cursor-pointer drop-shadow-md"
            >
              <Box className="flex flex-col justify-center items-center">
                <Box className="text-center relative">
                  <video
                    className="object-cover rounded-t-2xl"
                    autoPlay
                    muted
                    loop
                    src={item.video}
                    alt={item.title}
                    style={{ width: "100%", height: "300px" }} // Increased video height
                  />

                  <img
                    className="w-12 lg:w-16 bg-white p-2 absolute left-[50%] transform -translate-x-1/2 bottom-[5%] drop-shadow-md rounded-lg"
                    src={item.image}
                    alt={item.title}
                  />

                </Box>
                <Box className="flex flex-col items-start gap-3 mt-4 w-full text-start p-4">
                  <Tooltip
                    title={item.title}
                    placement="top"
                    TransitionComponent={Zoom}
                  >
                    <Typography className="!text-[15px]">
                      {item.title.length > 20
                        ? `${item.title.substring(0, 23)}...`
                        : item.title}
                    </Typography>
                  </Tooltip>
                  <Typography className="!font-semibold !text-lg lining-nums">
                    <span className="text-sm font-medium relative -top-2">Rs</span>{" "}
                    {item.currentPrice}
                  </Typography>
                  <Typography className="!text-sm lining-nums line-through decoration-red-500 text-slate-400">
                    <span className="text-xs relative -top-1">Rs</span>
                    {item.originalPrice}
                  </Typography>
                  <Box className="flex justify-between items-center w-full pb-2">
                    <Box className="flex items-center bg-[#FBF7EB] px-2 rounded-full">
                      <Typography className="!text-sm">
                        <FontAwesomeIcon
                          className="text-[#FFC61C]"
                          icon={faStar}
                        />{" "}
                        {item.rating}
                      </Typography>
                      <Typography className="!text-[11px] ps-2">
                        {item.reviews} Reviews
                      </Typography>
                    </Box>
                    <Typography className="!font-normal !text-xs text-[#1EB688] bg-[#F0FAF7] rounded-full px-1">
                      {item.discountPercentage}% OFF
                    </Typography>
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

export default ProductWithMedia;

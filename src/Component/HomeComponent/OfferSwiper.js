import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import {Box, Container} from "@mui/material"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const OfferSwiper = () => {
  return (

    <Box sx={{ marginTop:"350px", display:"block"}}>

   
<Container >
<Box>

      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        loop={true}
        style={{ width: '100%', height: 'auto' }}

        autoplay={{delay:3000}}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={3}
      >
        <SwiperSlide>
          <Box src="/Resources/slide1.png" component={"img"}>

          </Box>
        </SwiperSlide>
        <SwiperSlide> <Box src="/Resources/slide2.png" component={"img"}>

</Box></SwiperSlide>
        <SwiperSlide> <Box src="/Resources/slide1.png" component={"img"}>

</Box></SwiperSlide>
        <SwiperSlide> <Box src="/Resources/slide2.png" component={"img"}>

</Box></SwiperSlide>
      </Swiper>
    </Box>
      </Container>
      </Box>
  );
};

export default OfferSwiper;

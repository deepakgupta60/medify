import { Box, Container, Typography } from '@mui/material'
import React,{useState} from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



import { FreeMode, Pagination } from 'swiper/modules';


import styles from "./MedicalSpecialist.module.css"

const MedicalSpecialist = () => {
  return (
    <>
    <Box className={styles.medical_specialist}>
    <Container>
        <Typography variant='h3' sx={{textAlign:"center"}} component={"h3"}>Our Medical Specialist</Typography>

        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className={styles.swiper}
      >
        <SwiperSlide>
            <Box className={styles.doctor_card}>  
                
                <Box className={styles.doctor_card_image}>
                    <Box src={"/Resources/doctor.png"} component={"img"} sx={{width:"100%", height:"100%"}}></Box>
                </Box>
                <Box>
                    <Typography>Dr. Ahmad Khan</Typography>
                    <Typography>Neurologist</Typography>
                </Box>

            </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box className={styles.doctor_card}>  
                
                <Box className={styles.doctor_card_image}>
                    <Box src={"/Resources/doctor.png"} component={"img"} sx={{width:"100%", height:"100%"}}></Box>
                </Box>
                <Box>
                    <Typography>Dr. Ahmad Khan</Typography>
                    <Typography>Neurologist</Typography>
                </Box>

            </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box className={styles.doctor_card}>  
                
                <Box className={styles.doctor_card_image}>
                    <Box src={"/Resources/doctor.png"} component={"img"} sx={{width:"100%", height:"100%"}}></Box>
                </Box>
                <Box>
                    <Typography>Dr. Ahmad Khan</Typography>
                    <Typography>Neurologist</Typography>
                </Box>

            </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box className={styles.doctor_card}>  
                
                <Box className={styles.doctor_card_image}>
                    <Box src={"/Resources/doctor.png"} component={"img"} sx={{width:"100%", height:"100%"}}></Box>
                </Box>
                <Box>
                    <Typography>Dr. Ahmad Khan</Typography>
                    <Typography>Neurologist</Typography>
                </Box>

            </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box className={styles.doctor_card}>  
                
                <Box className={styles.doctor_card_image}>
                    <Box src={"/Resources/doctor.png"} component={"img"} sx={{width:"100%", height:"100%"}}></Box>
                </Box>
                <Box>
                    <Typography>Dr. Ahmad Khan</Typography>
                    <Typography>Neurologist</Typography>
                </Box>

            </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box className={styles.doctor_card}>  
                
                <Box className={styles.doctor_card_image}>
                    <Box src={"/Resources/doctor.png"} component={"img"} sx={{width:"100%", height:"100%"}}></Box>
                </Box>
                <Box>
                    <Typography>Dr. Ahmad Khan</Typography>
                    <Typography>Neurologist</Typography>
                </Box>

            </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box className={styles.doctor_card}>  
                
                <Box className={styles.doctor_card_image}>
                    <Box src={"/Resources/doctor.png"} component={"img"} sx={{width:"100%", height:"100%"}}></Box>
                </Box>
                <Box>
                    <Typography>Dr. Ahmad Khan</Typography>
                    <Typography>Neurologist</Typography>
                </Box>

            </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box className={styles.doctor_card}>  
                
                <Box className={styles.doctor_card_image}>
                    <Box src={"/Resources/doctor.png"} component={"img"} sx={{width:"100%", height:"100%"}}></Box>
                </Box>
                <Box>
                    <Typography>Dr. Ahmad Khan</Typography>
                    <Typography>Neurologist</Typography>
                </Box>

            </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box className={styles.doctor_card}>  
                
                <Box className={styles.doctor_card_image}>
                    <Box src={"/Resources/doctor.png"} component={"img"} sx={{width:"100%", height:"100%"}}></Box>
                </Box>
                <Box>
                    <Typography>Dr. Ahmad Khan</Typography>
                    <Typography>Neurologist</Typography>
                </Box>

            </Box>
        </SwiperSlide>
      </Swiper>
        


    </Container>
    </Box>
    </>
  )
}

export default MedicalSpecialist
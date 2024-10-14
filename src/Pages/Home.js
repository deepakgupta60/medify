import React from 'react'
import HeroSection from '../Component/HomeComponent/HeroSection'
import OfferSwiper from '../Component/HomeComponent/OfferSwiper'
import { Box } from '@mui/material'
import FindSpecialisation from '../Component/HomeComponent/FindSpecialisation'
import MedicalSpecialist from '../Component/HomeComponent/MedicalSpecialist'
import PatientCaring from '../Component/HomeComponent/PatientCaring'
import HomeSearch from '../Component/HomeComponent/HomeSearch'
import BlogComponent from '../Component/HomeComponent/BlogComponent'
import OurFamilies from '../Component/HomeComponent/OurFamilies'
import FaqComponent from '../Component/HomeComponent/FaqComponent'
import DownloadApp from '../Component/HomeComponent/DownloadApp'



const Home = () => {
  return (
   <Box>

   <HeroSection/>
   <HomeSearch />
    {/* <OfferSwiper/> */}
    <FindSpecialisation/>
    <MedicalSpecialist/>
    <PatientCaring/>
    <BlogComponent/>
    <OurFamilies/>
    <FaqComponent/>
    <DownloadApp/>
   </Box>
  )
}

export default Home
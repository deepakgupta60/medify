import { Container, Box, Typography, Button } from '@mui/material'
import React from 'react'


import styles from "./HeroSection.module.css"
import HomeSearch from './HomeSearch'
const HeroSection = () => {
    return (
        <Box className={styles.hero_section}>
            <Container>

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box sx={{ maxWidth: "50%" }} className={styles.hero_left_text}>

                        <Typography variant='h3' sx={{ color: "#102851", fontSize: "20px" }} component={"h3"}>
                            Skip the travel! Find Online
                        </Typography>
                        <Typography variant='h1' className={styles.middle_hero_text}>

                            Medical <span> Centers</span>
                        </Typography>

                        <Typography variant='p' component={"p"} sx={{ color: "#5C6169", paddingBottom: "10px", paddingTop: "10px" }}>
                            Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
                        </Typography>
                        <Button variant='contained' sx={{ boxShadow: "none", marginTop: "20px", backgroundColor: "#2AA8FF" }}>
                            Find Centers
                        </Button>
                    </Box>
                    <Box sx={{ maxWidth: "50%" }}>

                        <Box component={"img"} src='/Resources/hero_image.png' sx={{ width: "100%", height: "100%" }}>

                        </Box>
                    </Box>
                </Box>
               
            </Container>
        </Box>
    )
}

export default HeroSection
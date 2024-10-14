import { Box, Container, Grid2, Typography } from '@mui/material'
import React from 'react'

import styles from "./OurFamilies.module.css"

const OurFamilies = () => {
    return (
        <Box className={styles.our_families}>
            <Container>

                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 6, lg: 6 }}>
                        <Typography>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</Typography>
                        <Typography>Our Families</Typography>
                        <Typography>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6, lg: 6 }}>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Box>
                                <Box className={styles.family_card}>
                                    <Typography>5000+</Typography>
                                    <Typography>Happy Patients</Typography>
                                </Box>
                                <Box className={styles.family_card}>
                                    <Typography>5000+</Typography>
                                    <Typography>Happy Patients</Typography>
                                </Box>
                            </Box>
                            <Box sx={{marginTop:"20px"}}>
                                <Box className={styles.family_card}>
                                    <Typography>5000+</Typography>
                                    <Typography>Happy Patients</Typography>
                                </Box>
                                <Box className={styles.family_card} >
                                    <Typography>5000+</Typography>
                                    <Typography>Happy Patients</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}

export default OurFamilies
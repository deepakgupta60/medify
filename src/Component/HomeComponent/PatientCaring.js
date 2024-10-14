import { Box, Container, Grid2, Typography } from '@mui/material'
import React from 'react'


import styles from "./PatientCaring.module.css"
const PatientCaring = () => {
    return (
        <Box className={styles.patient_caring}>
            <Container>
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 6, lg: 6 }}>
                        <Box className={styles.patient_image}>
                            <Box src={"/Resources/doctor.png"} component={"img"}></Box>
                        </Box>

                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6, lg: 6 }}>
                        <Box className={styles.patient_text}>
                            <Typography>HELPING PATIENTS FROM AROUND THE GLOBE!!</Typography>
                            <Typography>Patient Caring</Typography>
                            <Typography>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</Typography>
                            <Typography>Stay Updated About Your Health</Typography>
                            <Typography>Check Your Results Online</Typography>
                            <Typography>Manage Your Appointments</Typography>
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}

export default PatientCaring
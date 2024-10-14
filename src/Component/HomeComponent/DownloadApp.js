import { Box, Button, Container, Grid2, TextField, Typography } from '@mui/material'
import React from 'react'

import styles from "./DownloadApp.module.css";

const DownloadApp = () => {
  return (
    <Box className={styles.download_app}>
        <Container>
            <Grid2 container spacing={2}>
                <Grid2 size={{xs:12, md:6, lg:6}}>
                    <Box src={"/Resources/doctor.png"} component={"img"}></Box>
                </Grid2>
                <Grid2>
                    <Box>
                        <Typography>Download the Medify App</Typography>
                        <Typography>Get the link to download the app</Typography>
                        <Box>
                            <TextField label="Search" variant='outlined'/>
                            <Button variant='contained'>Send SMS</Button>
                        </Box>
                        <Box>
                            <Button variant='contained'>Google Play</Button>
                            <Button variant='contained'>App Store</Button>
                        </Box>
                    </Box>
                </Grid2>
            </Grid2>
        </Container>
    </Box>
  )
}

export default DownloadApp
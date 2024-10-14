import { Box, Container, Divider, Grid2, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'



import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <Box className={styles.footer}>

      <Container>
        <Box>
          <Grid2 container spacing={2}>

            <Grid2 size={{ xs: 12, md: 3, lg: 3 }}>
              <Box>
                <Box src={"/Resources/doctor.png"} component={"img"}></Box>
                <Box>
                  Social Icons
                </Box>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3, lg: 3 }}>
              <List>
                <ListItem disablePadding>
                  About Us
                </ListItem>
                <ListItem disablePadding>
                  Our Pricing
                </ListItem>
                <ListItem disablePadding>
                  Our Gallery
                </ListItem>
                <ListItem disablePadding>
                  Privacy Policy
                </ListItem>
              </List>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 3, lg: 3 }}>
              <List>
                <ListItem disablePadding>
                  About Us
                </ListItem>
                <ListItem disablePadding>
                  Our Pricing
                </ListItem>
                <ListItem disablePadding>
                  Our Gallery
                </ListItem>
                <ListItem disablePadding>
                  Privacy Policy
                </ListItem>
              </List>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 3, lg: 3 }}>
              <List>
                <ListItem disablePadding>
                  About Us
                </ListItem>
                <ListItem disablePadding>
                  Our Pricing
                </ListItem>
                <ListItem disablePadding>
                  Our Gallery
                </ListItem>
                <ListItem disablePadding>
                  Privacy Policy
                </ListItem>
              </List>
            </Grid2>
          </Grid2>
        </Box>
        <Divider />

        <Box>
          <Typography>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</Typography>
        </Box>
      </Container>

    </Box>
  )
}

export default Footer
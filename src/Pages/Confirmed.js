import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'


const Confirmed = () => {

  const location = useLocation()
  const { time, selectedCentreData, activeTab } = location.state


  return (
    <Box>
      <Container>
        
        <Card>
         
          
        </Card>

        <Card sx={{ display: "flex", justifyContent: "cen" }}>
          <CardMedia
            sx={{ height: 140 }}
            component={"img"}
            image="/Resources/card_icon.png"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {selectedCentreData["Hospital Name"]}
            </Typography>
            <Typography>

            {selectedCentreData["State"]}
              Smilessence Center for Advanced Dentistry + 1
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <Button size="small">{time}</Button>
            <Button size="small">
              
            {activeTab === 0 && <p>Wed, 3 May</p>}
          {activeTab === 1 && <p>Thu, 4 May</p>}
          {activeTab === 2 && <p>Fri, 5 May</p>}
          {activeTab === 3 && <p>Sat, 6 May</p>}
          {activeTab === 4 && <p>Sun, 7 May</p>}
          {activeTab === 5 && <p>Mon, 8 May</p>}
          {activeTab === 6 && <p>Tue, 9 May</p>}

            </Button>
          </CardActions>
        </Card>
      </Container>

    </Box>
  )
}

export default Confirmed
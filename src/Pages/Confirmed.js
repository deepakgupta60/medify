import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'


const Confirmed = () => {

  const location = useLocation()
  const { time, selectedCentreData, activeTab } = location.state


  return (
    <div>Confirmed {time}

      <Card sx={{ display: "flex", justifyContent: "cen" }}>
        <CardMedia
          sx={{ height: 140 }}
          component={"img"}
          image="/Resources/card_icon.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {selectedCentreData[""]}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions sx={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>





      <Card>
        {selectedCentreData["State"]}
        {activeTab === 0 && <p>Wed, 3 May</p>}
        {activeTab === 1 && <p>Thu, 4 May</p>}
        {activeTab === 2 && <p>Fri, 5 May</p>}
        {activeTab === 3 && <p>Sat, 6 May</p>}
        {activeTab === 4 && <p>Sun, 7 May</p>}
        {activeTab === 5 && <p>Mon, 8 May</p>}
        {activeTab === 6 && <p>Tue, 9 May</p>}
      </Card>


    </div>
  )
}

export default Confirmed
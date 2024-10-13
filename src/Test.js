import { Box, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'

const Test = () => {
  const [value, setValue]=useState(0);

  const handleChange=(_,newval)=>{
    setValue(newval)
  }
  
  return (
    <>
    <Box>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Item One"/>
        <Tab label="Item Two"/>
        <Tab label="Item Three"/>
      </Tabs>

      {value==0 && <Typography>Item One</Typography>}
      {value==1 && <Typography>Item Two</Typography>}
      {value==2 && <Typography>Item Three</Typography>}
    </Box>
    </>
  )
}

export default Test
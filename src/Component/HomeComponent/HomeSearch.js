import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { LocationContext } from '../../LocationProvider'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import styles from "./HomeSearch.module.css"

const HomeSearch = () => {

  const { selectedCity, setSelectedCity, selectedState, setSelectedState } = useContext(LocationContext)
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);

  const navigate = useNavigate();

  //fetching state
  useEffect(() => {
    axios.get('https://meddata-backend.onrender.com/states').then((response) => setStateData(response.data)).catch((err) => console.error("Error while fetching state", err))
  }, [])



  useEffect(() => {
    if (selectedState) {
      axios.get(`https://meddata-backend.onrender.com/cities/${selectedState}`).then((response) => setCityData(response.data)).catch((err) => console.log("Error while fetching api: ", err))
    }
  }, [selectedState])
  // console.log("Selected City: ", selectedCity)


  const handleStateChange = (e) => {
    let selectState = e.target.value;
    console.log(e.target.value)
    setSelectedState(selectState)
    localStorage.setItem("state", selectState)
  }


  const handleCityChange = (e) => {
    const selectCity = e.target.value;
    setSelectedCity(selectCity)
    localStorage.setItem("city", selectCity)
  }

  const handleSearch = () => {
    if (selectedState && selectedCity) {
      navigate("/result")
    }

  }

  const HomeCard = ({ img, text }) => {
    return (<>
      <Card sx={{ width: "100px", boxShadow: "none", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", "&:hover": { background: "#2AA7FF", borderRadius: "5px" }, padding: "50px" }}>
        <CardMedia sx={{ width: "50px" }} image='/Resources/card_icon.png' component={"img"} />
        <Typography variant='p' sx={{ paddingTop: "10px" }} component={"p"}>{text}</Typography>
      </Card>
    </>)
  }
  return (
    <>
      <Box className={styles.home_search}>
        <Container>

          <Box sx={{ background: "white", borderRadius: "10px" }}>


            <Box sx={{ display: "flex", zIndex:"99999", position:"relative",  justifyContent: "space-around", flexDirection: "row" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                  value={selectedState}
                  label="State"
                  onChange={handleStateChange}

                >

                  {
                    stateData.length > 0 ? stateData.map((data, idx) => (
                      <MenuItem key={idx} value={data}>{data}</MenuItem>
                    )) : <MenuItem>No State Found</MenuItem>
                  }
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">City</InputLabel>

                <Select
                  value={selectedCity}
                  label="City"
                  onChange={handleCityChange}
                >

                  {
                    cityData.length > 0 ? cityData.map((data, idx) => (
                      <MenuItem key={idx} value={data}>{data}</MenuItem>
                    )) : <MenuItem>No City Found</MenuItem>
                  }

                </Select>
              </FormControl>

              <Button variant='contained' onClick={handleSearch}>Search</Button>

            </Box>



            <Box sx={{ marginTop: "20px" }}>
              <Typography sx={{ textAlign: "center" }}>You may be looking for</Typography>

              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>

                <HomeCard img={""} text={"Doctors"} />
                <HomeCard img={""} text={"Labs"} />
                <HomeCard img={""} text={"Hospitals"} />
                <HomeCard img={""} text={"Medical Store"} />
                <HomeCard img={""} text={"Ambulance"} />


              </Box>
            </Box>
          </Box>
        </Container>


      </Box>
    </>
  )
}

export default HomeSearch
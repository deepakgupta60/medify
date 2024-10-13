import { Box, Button } from '@mui/material'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { LocationContext } from '../../LocationProvider'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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

  const handleSearch=()=>{
    if(selectedState && selectedCity)
    {
      navigate("/result")
    }
  }
  return (
    <>
      <Box sx={{ backgroundColor: "white", marginTop: "-150px", position: "relative", zIndex: "999", padding: "20px" }} >

        <Box sx={{ display: "flex", justifyContent: "space-around", flexDirection: "row" }}>
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
      </Box>
    </>
  )
}

export default HomeSearch
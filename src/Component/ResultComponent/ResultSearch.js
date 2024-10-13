import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { LocationContext } from '../../LocationProvider'
import axios from 'axios';

const ResultSearch = () => {
   
    const { selectedCity, setSelectedCity, selectedState, setSelectedState } = useContext(LocationContext);

    const [cityData, setCityData] = useState([])
    const [stateData, setStateData] = useState([])

    const [city, setCity]=useState(()=>{
        const selectCity = localStorage.getItem('city')
        return selectCity || ''
    });
    const [states, setStates]=useState(()=>{
        const selectState = localStorage.getItem('state');
        return selectState || ''
    });


    useEffect(() => {
        axios.get('https://meddata-backend.onrender.com/states').then((response) => setStateData(response.data)).catch((err) => console.error("Error while fetching State"))
    }, [])


    useEffect(() => {
        if (states) {
            axios.get(`https://meddata-backend.onrender.com/cities/${states}`).then((response) => setCityData(response.data)).catch((err) => console.log("Error while fetching data"))
        }
    }, [states])


    const handleSearch = ()=>{
        setSelectedState(states)
        setSelectedCity(city)
        localStorage.setItem("state", states)
        localStorage.setItem("city", city)
        
    }
    return (
        <>
            <Box sx={{ background: "#2AA8FF", }}>
                <Container>
                    <Box sx={{ background: "white", display: "flex", justifyContent: "center" }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">State</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={states}
                                label="Age"
                                onChange={(e)=>setStates(e.target.value)}
                            >
                                {
                                    stateData.length > 0 ? stateData.map((data, idx) => (
                                        <MenuItem value={data} key={idx}>{data}</MenuItem>
                                    )) : <MenuItem value="">No State Found</MenuItem>
                                }
                            </Select>
                        </FormControl>

                                <FormControl  fullWidth>
                                    <InputLabel id="city-select"> City</InputLabel>
                                    <Select labelId='city-select'
                                    value={city}
                                    onChange={(e)=>setCity(e.target.value)}
                                    >
                                    {cityData.length>0 ? cityData.map((data)=>(
                                        <MenuItem value={data}>{data}</MenuItem>
                                    )):<MenuItem>No City Found</MenuItem>}
                                    </Select>
                                </FormControl>

                                <Button onClick={handleSearch}>Search</Button>

                    </Box>
                </Container>
            </Box>


        </>
    )
}

export default ResultSearch
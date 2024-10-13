import React, { useContext, useEffect, useState, Fragment } from 'react'
import { LocationContext } from '../../LocationProvider'
import axios from 'axios';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Rating, Typography } from '@mui/material';
import styles from "./ShowResult.module.css"

const CentreCard = ({name, address, city, state, zip, rating}) => {
    return (<>
        <Box className={styles.centre_card}>
            <Card sx={{ display: "flex" }}>
                <CardMedia
                component={"img"}
                    sx={{ height: 140 }}
                    image="/Resources/card_icon.png"
                    title="green iguana"
                />
                <Rating value={rating} name={"read-only"} readOnly precision={0.5}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    </>)
}

const ShowResult = () => {
    const { selectedState, selectedCity } = useContext(LocationContext);
    const [medicalCentre, setMedicalCentre] = useState([]);



    useEffect(() => {
        if (selectedCity && selectedState) {
            axios.get(`https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`).then((response) => setMedicalCentre(response.data)).catch((err) => console.log("Error while fetching: ", err))
        }
    }, [selectedCity, selectedState])


    return (
        <Box className={styles.show_result}>
            <Container>


                {medicalCentre.length > 0 ? medicalCentre.map((data, idx) => {

                    return (
                        <Box >
                            <CentreCard  name={data["Hospital Name"]} address={data["Address"]} city={data["City"]} state={data["State"]} zip={data["ZIP Code"]} rating={data["Hospital overall rating"]} />
                        </Box>
                    )
                }) : <p>Not Found</p>}

            </Container>


        </Box>
    )
}

export default ShowResult
import React, { useContext, useEffect, useState, Fragment } from 'react'
import { LocationContext } from '../../LocationProvider'
import axios from 'axios';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Rating, Tab, Tabs, Typography } from '@mui/material';
import styles from "./ShowResult.module.css"
import { useNavigate } from 'react-router-dom';




const CentreCard = ({ name, address, city, state, rating, centreId, handleAppointment, selectedCentre, handleTabChange, activeTab, handleTimeSlots }) => {


    const TimeSlots = () => {
        return (
            <>
                <table>
                    <tr>
                        <td width={"20%"}> Morning:  </td>
                        <td width={"80%"}> <Button onClick={handleTimeSlots}>10:20</Button>  <Button onClick={handleTimeSlots}> 10:20</Button>   <Button onClick={handleTimeSlots}>10:20</Button>   <Button onClick={handleTimeSlots}>10:20</Button>   <Button onClick={handleTimeSlots}>10:20</Button>  </td>
                    </tr>
                    <tr>
                    <td width={"20%"}> Afternoon:  </td>
                        <td width={"80%"}> 
                            <Button onClick={handleTimeSlots}>10:20</Button>  <Button onClick={handleTimeSlots}> 10:20</Button>   <Button onClick={handleTimeSlots}>10:20</Button>   <Button onClick={handleTimeSlots}>10:20</Button>   <Button onClick={handleTimeSlots}>10:20</Button>  </td>
                    </tr>
                    <tr>

                    <td width={"20%"}> Evening:  </td>
                        <td width={"80%"}> <Button onClick={handleTimeSlots}>10:20</Button>  <Button onClick={handleTimeSlots}> 10:20</Button>   <Button onClick={handleTimeSlots}>10:20</Button>   <Button onClick={handleTimeSlots}>10:20</Button>   <Button onClick={handleTimeSlots}>10:20</Button>  </td>
                    </tr>
                </table>
            </>
        )
    }



    return (<>
        <Box className={styles.centre_card}>
            <Card sx={{ display: "flex" }}>
                <CardMedia
                    component={"img"}
                    sx={{ height: 140 }}
                    image="/Resources/card_icon.png"
                    title="green iguana"
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="p" component="p">
                        {city}, {state}
                    </Typography>

                    <Typography gutterBottom variant="p" component="p">
                        Smilessence Center for Advanced Dentistry + 1
                    </Typography>


                    <Typography gutterBottom variant="p" component="p">
                        Free ₹500  Consultation fee at clinic
                    </Typography>

                    <Rating value={rating} name={"read-only"} readOnly precision={0.5} />
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <Typography variant="p" component="p">
                        Available Today
                    </Typography>
                    <Button variant='contained' onClick={() => handleAppointment(centreId)}>Learn More</Button>
                </CardActions>
            </Card>

            {
                selectedCentre === centreId && (
                    <>


                        <Tabs value={activeTab} onChange={handleTabChange}>
                            <Tab label="Today" />
                            <Tab label="Tommorow" />
                            <Tab label="Fri, 5 May" />
                            <Tab label="Fri, 6 May" />
                            <Tab label="Fri, 7 May" />
                            <Tab label="Fri, 8 May" />
                            <Tab label="Fri, 9 May" />
                        </Tabs>



                        {activeTab === 0 && <TimeSlots />}
                        {activeTab === 1 && <TimeSlots />}
                        {activeTab === 2 && <TimeSlots />}
                        {activeTab === 3 && <TimeSlots />}
                        {activeTab === 4 && <TimeSlots />}
                        {activeTab === 5 && <TimeSlots />}
                        {activeTab === 6 && <TimeSlots />}


                        {/* 
                        <div>

                            <Typography>Available Time</Typography>
                            <Button onClick={() => handleTabChange('today')} > Today</Button>
                            <Button onClick={() => handleTabChange('tommorow')} > Tommorow</Button>
                            <Button onClick={() => handleTabChange('aftertomm')} > After Tommorow</Button>

                        </div> 
                        */}




                        {/* <div>
                            {activeTab === "today" && (
                                <div>
                                    <button onClick={() => handleTimeSlots('10:00 AM')}>10:00 AM</button>
                                    <button onClick={() => handleTimeSlots('11:00 AM')}>11:00 AM</button>
                                    <button onClick={() => handleTimeSlots('11:00 AM')}>11:00 AM</button>
                                </div>
                            )}

                            {activeTab === "tommorow" && (
                                <div>
                                    <button onClick={() => handleTimeSlots('10:00 AM')}>20:00 AM</button>
                                    <button onClick={() => handleTimeSlots('11:00 AM')}>11:00 AM</button>
                                    <button onClick={() => handleTimeSlots('11:00 AM')}>11:00 AM</button>
                                </div>
                            )}

                            {activeTab === "aftertomm" && (
                                <div>
                                    <button onClick={() => handleTimeSlots('10:00 AM')}>3:00 AM</button>
                                    <button onClick={() => handleTimeSlots('11:00 AM')}>11:00 AM</button>
                                    <button onClick={() => handleTimeSlots('11:00 AM')}>11:00 AM</button>
                                </div>
                            )}
                        </div> */}


                    </>
                )
            }

        </Box>
    </>)
}

const ShowResult = () => {
    const { selectedState, selectedCity } = useContext(LocationContext);
    const [medicalCentre, setMedicalCentre] = useState([]);

    // for appointment related code

    const [selectedCentre, setSelectedCentre] = useState([])
    const [activeTab, setActiveTab] = useState(0)


    const navigate = useNavigate();


    useEffect(() => {
        if (selectedCity && selectedState) {
            axios.get(`https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`).then((response) => setMedicalCentre(response.data)).catch((err) => console.log("Error while fetching: ", err))
        }
    }, [selectedCity, selectedState])



    const handleAppointment = (centerId) => {
        setSelectedCentre(centerId)
        console.log("center id: ", centerId)
    }

    // const handleTabChange = (day) => {
    //     setActiveTab(day)
    // }

    const handleTimeSlots = (e) => {

        // console.log("inSlotCode: ", e.target.innerText)

        let time = e.target.innerText;
        console.log(selectedCentre,"coming centre id")
        if (window.confirm("Are you booking")) {
            localStorage.clear('state')
            localStorage.clear('city')
            navigate('/confirmation', { state: {time, selectedCentre}  })

        }
    }


    const handleTabChange = (_, prev) => {
        setActiveTab(prev)
    }

    return (
        <Box className={styles.show_result}>
            <Container>
                {medicalCentre.length > 0 ? medicalCentre.map((data, idx) => {

                    return (
                        <Box >
                            <CentreCard name={data["Hospital Name"]} handleTabChange={handleTabChange} activeTab={activeTab} centreId={data["Provider ID"]} address={data["Address"]} city={data["City"]} selectedCentre={selectedCentre} state={data["State"]} zip={data["ZIP Code"]} rating={data["Hospital overall rating"]} handleAppointment={handleAppointment} handleTimeSlots={handleTimeSlots} />
                        </Box>
                    )
                }) : <p>Not Found</p>}

            </Container>


        </Box>
    )
}

export default ShowResult
import React from 'react'

import styles from "./FaqComponent.module.css"
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, Container, Grid2, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const FaqComponent = () => {
    return (
        <Box className={styles.faq}>
            <Container>
                <Typography sx={{textAlign:"center"}}>Get Your Answer</Typography>
                <Typography sx={{textAlign:"center"}}>Frequently Asked Questions</Typography>
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 6, lg: 6 }}>
                        <Box src={"/Resources/doctor.png"} component={"img"}></Box>
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 6, lg: 6 }}>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                Accordion 1
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                Accordion 2
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                Accordion Actions
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                            <AccordionActions>
                                <Button>Cancel</Button>
                                <Button>Agree</Button>
                            </AccordionActions>
                        </Accordion>
                    </Grid2>
                </Grid2>
            </Container>

        </Box>
    )
}

export default FaqComponent
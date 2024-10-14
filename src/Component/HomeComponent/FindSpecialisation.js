import { Box, Container, Typography } from "@mui/material"

import styles from "./FindSpecialisation.module.css"

const FindSpecialisation = () => {
    return (<>
        <Box className={styles.find_specialisation}>
            <Container>

           
            <Typography variant="h3" sx={{ textAlign: "center", paddingTop:"10px", paddingBottom:"30px" }} component={"h3"}> Find by specialisation </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignContent: "center", }}>
                <Box sx={{padding: "20px", background: "white" }}>
                    <Box src={"/Resources/card_icon.png"} component={"img"}></Box>
                    <Typography>Dentistry</Typography>

                </Box>
                <Box sx={{padding: "20px", background: "white" }}>
                    <Box src={"/Resources/card_icon.png"} component={"img"}></Box>
                    <Typography>Dentistry</Typography>

                </Box>
                <Box sx={{padding: "20px", background: "white" }}>
                    <Box src={"/Resources/card_icon.png"} component={"img"}></Box>
                    <Typography>Dentistry</Typography>

                </Box>
                <Box sx={{padding: "20px", background: "white" }}>
                    <Box src={"/Resources/card_icon.png"} component={"img"}></Box>
                    <Typography>Dentistry</Typography>

                </Box>
                <Box sx={{padding: "20px", background: "white" }}>
                    <Box src={"/Resources/card_icon.png"} component={"img"}></Box>
                    <Typography>Dentistry</Typography>

                </Box>


            </Box>
            </Container>
        </Box>
    </>)
}

export default FindSpecialisation
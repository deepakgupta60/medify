import { AppBar, Box, Button, Container, IconButton, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from "./Header.module.css"
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {


    const [anchorElNav, setAnchorElNav] = useState(null)

    const handleOpenNavMenu = (e) => {
        setAnchorElNav(e.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }


    return (
        <>
            <Box className={styles.top_header} >
                <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography className={styles.top_header_heading}>
                        The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
                    </Typography>
                </Container>
            </Box>
            <Box className={styles.mid_main_header}>
                <AppBar position="static" sx={{ background: "transparent", boxShadow: "none" }} className={styles.main_header}>
                    <Container>

                        <Toolbar disableGutters>



                            <Box src={"/Resources/logo.png"} component={"img"} sx={{ display: { xs: "none", md: "flex" } }}>
                            </Box>




                            {/* this is a mobile menu */}
                            <Box>

                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{ display: { xs: 'block', md: 'none' } }}

                                >


                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>

                                            Find Doctors
                                        </Typography>
                                    </MenuItem>

                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>

                                            Find Doctors
                                        </Typography>
                                    </MenuItem>

                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>

                                            Find Doctors
                                        </Typography>
                                    </MenuItem>

                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>

                                            Find Doctors
                                        </Typography>
                                    </MenuItem>
                                </Menu>



                            </Box>



                            {/* mobile menu  end */}

                            <Box src={"/Resources/logo.png"} component={"img"} sx={{ display: { xs: "flex", md: "none" } }}>
                            </Box>




                            {/* mobile hamburger icon end */}
                            <IconButton

                                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent: "flex-end" } }}
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"

                            >
                                <MenuIcon />
                            </IconButton>
                            {/* mobile hamburger icon end */}



                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "flex-end" } }} className={styles.nav_menu}>
                                <Button
                                    className={styles.main_header_button}

                                    sx={{ my: 2, color: "#102851", display: 'block' }}
                                >
                                    Find Doctors
                                </Button>

                                <Button

                                    className={styles.main_header_button}
                                    sx={{ my: 2, color: '#102851', display: 'block' }}
                                >
                                    Hospitals
                                </Button>

                                <Button

                                    className={styles.main_header_button}
                                    sx={{ my: 2, color: '#102851', display: 'block' }}
                                >
                                    Medicines
                                </Button>

                                <Button

                                    className={styles.main_header_button}
                                    sx={{ my: 2, color: '#102851', display: 'block' }}
                                >
                                    Surgeries
                                </Button>

                                <Button
                                    className={styles.main_header_button}
                                    sx={{ my: 2, color: '#102851', display: 'block' }}
                                >
                                    Software for Provider
                                </Button>


                                <Button sx={{ my: 2, color: '#102851', display: 'block' }}
                                    className={styles.main_header_button}
                                >
                                    Facilities
                                </Button>

                                <Button sx={{ my: 2, color: '#102851', display: 'block' }} className={styles.booking_button}> My Booking </Button>
                            </Box>

                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>

        </>
    )
}

export default Header
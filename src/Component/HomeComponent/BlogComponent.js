import { Avatar, Box, Card, CardActions, CardContent, CardMedia, Container, Grid2,  Typography } from '@mui/material'
import React from 'react'
import styles from "./BlogComponent.module.css"


const BlogComponent = () => {
    return (
        <Box className={styles.blog_section}>
            <Container>
                <Typography sx={{textAlign:"center"}}>Blog & News</Typography>
                <Typography sx={{textAlign:"center"}} variant='h3' component={"h3"} >Read Our Latest News</Typography>
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="194"
                                image="/static/images/cards/paella.jpg"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                </Typography>
                            </CardContent>

                            <CardActions disableSpacing>
                                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                                    R
                                </Avatar>
                            </CardActions>

                        </Card>
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="194"
                                image="/static/images/cards/paella.jpg"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                </Typography>
                            </CardContent>

                            <CardActions disableSpacing>
                                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                                    R
                                </Avatar>
                            </CardActions>

                        </Card>
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="194"
                                image="/static/images/cards/paella.jpg"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                </Typography>
                            </CardContent>

                            <CardActions disableSpacing>
                                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                                    R
                                </Avatar>
                            </CardActions>

                        </Card>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}

export default BlogComponent
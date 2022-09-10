import { Card, CardContent, CardHeader, CardMedia, Typography,Box } from "@mui/material"

import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"


const SingleMovie = ()=>{
    const {movieId}= useParams()
   
    const movies = useSelector(state=>state.movies)
    
    
    const movie = movies.movies.items.find(movie=>movie.id === (movieId))
   
   
    return(
        <Box style={{ margin:"auto", width:"50%", height:"70%"}}>
            <Card sx={{display:"flex", alignItems:"center"}}>
                <Box>
                    <CardMedia
                        component={"img"}
                        src={movie.image}
                        height="300"
                    />
                </Box>
                <Box>    
                    <CardHeader title={movie.title} />
                    <CardContent gutterBottom>
                        <Typography variant ="body1" color="secondary.main" gutterBottom>Starring:{movie.crew}</Typography>
                        <Typography variant="h5" color="primary.light" gutterBottom>Year released:{movie.year}</Typography>
                        <Typography variant="h5" color="secondary.light" gutterBottom>imDbRating: *{movie.imDbRating}</Typography>
                    </CardContent>
                </Box>
            </Card>
        </Box>
    )
}
export default SingleMovie
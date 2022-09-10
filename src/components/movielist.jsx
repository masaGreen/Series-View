import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { makeStyles } from "@mui/styles";

import {
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Card,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  cardtransform: {
    height: "250px",
    // overflow: "hidden",
    "&:hover": {
      transform: "scale(1.2, 1.2)",
      zIndex:100
    },
  },

  cardtransition: {
    "&:hover": {
      transition: "transform 1000 ease-in",
    },
  },
}));

const MovieList = ({ name }) => {
  const classes = useStyles();
  const movies = useSelector((state) => state.movies.movies);
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);
  const [pageNumber, setPageNumber] = useState(0);
  // const [transtions, setTransitions] = useState("")

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  if (loading === "loading") {
    return <Typography variant="h5">Loading movies..</Typography>;
  }
  if (loading === "failed") {
    return (
      <Typography variant="h6" color="secondary">
        Error loading movies{error}
      </Typography>
    );
  }
  if (loading === "success") {
    const itemsPerPage = 8;
    const firstIndex = pageNumber * itemsPerPage;
    const paginatedMovies = movies.items.slice(
      firstIndex,
      firstIndex + itemsPerPage
    );
    const pageCount = Math.ceil(movies.items.length / itemsPerPage);

    const shownMovies = movies.items.filter((movie) =>
      movie.title.toLowerCase().includes(name.toLowerCase())
    );

    return (
      <>
        <Grid
          container
          spacing={1}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {(shownMovies.length < movies.items.length
            ? shownMovies
            : paginatedMovies
          ).map((movie) => {
            return (
              <Grid item className={classes.cardtransition}>
                <Card key={movie.id} className={classes.cardtransform}>
                <Link to={`singlemovie/${movie.id}`}>
                      <CardMedia
                        sx={{maxWidth:"100%", backgroundSize:"contain", overflow:"hidden", objectFit:"cover"}}
                        component={"img"}
                        src={movie.image}
                        height="180px"
                      />
                    </Link>
                  <CardActionArea>
                   
                    <CardContent>
                      <Typography variant="body2" gutterBottom>
                        {movie.title}
                      </Typography>
                      <Typography variant="body1">{movie.year}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <ReactPaginate
          nextLabel=">>"
          onPageChange={handlePageClick}
          pageClassName="pageclass"
          containerClassName="paginateContainer"
          activeClassName="active"
          previousClassName="previous"
          nextClassName="next"
          pageCount={pageCount}
          previousLabel="<<"
        />
      </>
    );
  }
};
export default MovieList;

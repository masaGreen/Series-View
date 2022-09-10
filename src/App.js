import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navigation from "./common/navigation";
import Home from "./common/home";
import Register from "./components/register";
import Footer from "./common/footer";
import Login from "./components/login";
import SingleMovie from "./components/singlemovie";
import { Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "./features/movies/moviesSlice";
import { theme } from "./common/theme";
import { ThemeProvider } from "@mui/material/styles";


import "./app.css";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
  const [name, setName] = useState("");
  const [ auth, setAuth] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Router>
          <Navigation name={name} setName={setName} setAuth={setAuth} auth={auth} />
          <Routes>
            {/* <Route path="/" element={<Register/>}/> */}
            <Route path="/Series-Gallery/home" element={<Home name={name}  />}/>
 
            {/* <Route path="/login" element={<Login setAuth={setAuth}/>} /> */}
            {/* <Route path="/home/login" element={<Login setAuth={setAuth}/>} /> */}
            <Route path="/Series-Gallery/home/singlemovie/:movieId" element={<SingleMovie />} />
          </Routes>
        </Router>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};
export default App;

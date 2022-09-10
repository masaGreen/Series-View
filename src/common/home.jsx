import { Container } from "@mui/material"
import MovieList from "../components/movielist"
import {Outlet} from "react-router-dom"

const Home = ({name, setName})=>{
    return(
        <Container  >
            <MovieList name={name} setName={setName}/>
            <Outlet/>
            
        </Container>
    )
}
export default Home
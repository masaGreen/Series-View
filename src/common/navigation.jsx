import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  InputBase,
} from "@mui/material";
import { PermIdentity, Search } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const Navigation = ({ name, setName,auth,setAuth }) => {
  const navigate=useNavigate()
  const handleLogout = ()=>{
    setAuth(false)
    navigate("/login")
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ marginBottom: "1.2em" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Netflex
          </Typography>
          
          {/* {auth && */}
           <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#0d47a1",
              borderRadius: "4px",
              padding: "4px",
            }}
          >
            <InputBase
              placeholder={"search by name"}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Search />
          </Box>
          {/* } */}
          {/* {auth &&  */}
          <>
            <Link to="/home">
            <Button
              color="inherit"
              sx={{ textTransform: "none", color: "white" }}
            >
              Home
            </Button>
          </Link>
          <Link to="/login">
            <Button sx={{ textTransform: "none", color: "white" }} onClick={handleLogout}>
              logout
            </Button>
          </Link>
          <Link to="/register">
            <Button sx={{ textTransform: "none", color: "white" }}>
              register
            </Button>
          </Link>
          </>
          {/* } */}
          {/* {auth &&  */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <PermIdentity />
          </IconButton>
{/* } */}
        </Toolbar>
      </AppBar>
    </Box>
    
  );
};
export default Navigation;

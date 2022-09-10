import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
import {
    Button,
    Checkbox,
  Box,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { theme } from "../common/theme";

const useStyles = makeStyles((theme) => {
  return {
    main: {
      position:"relative",
      display:"flex",
      justifyContent:"center",
      height:"70vh",
      background: "url(https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdmllcyUyMHBvc3RlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)",
    },
    field: {
      border:"1px solid navy",
      borderRadius:"4px",
      // justifyContent:"center",
      display: "flex",
      flexDirection: "column",
      width: "250px",
      color: "white",
      background:"rgba(0,0,0,0.4)"

    },
  };
});

const Register = () => {
  const classes = useStyles();
  const navigate = useNavigate()
  const [gender, setGender] = useState("Male")
  const [epic, setEpic] = useState(false)
  const [password, setPassword] = useState()
  const [sci, setSci] = useState(false)
  const[ username, setUsername] = useState("")
  const handleForm = async (e) =>{
    e.preventDefault()
    const userData = {username, password, gender, genre:{epic, sci}}
    console.log(userData)
    await axios.post("http://localhost:4000/users", userData)
    navigate("/login")
  }
  return (
    <Box className={classes.main}>
      <form className={classes.field}>
        <div style={{
          background:"rgba(0,0,0,0.7)",
          position:"absolute",
          height:"100%"
        }}></div>
        <TextField
          variant="outlined"
          label="Username"
          
          color="secondary"
          onChange={(e)=>setUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Password"
          type="password"
          color="secondary"
          onChange={(e)=>setPassword(e.target.value)}
        />
        <div style={{marginInline:"auto",paddingLeft:"1.5rem"}}>
          <FormLabel>Gender</FormLabel>
          <RadioGroup value={gender} onChange={(e)=>setGender(e.target.value)}>
            <FormControlLabel control={<Radio />} label="Male" value="Male" />
            <FormControlLabel control={<Radio />} label="Female" value="Female" />
          </RadioGroup>
          <FormLabel>Genres interested in</FormLabel>
          <FormGroup>
            <FormControlLabel control={<Checkbox checked={epic} onChange={(e)=>setEpic(e.target.checked)}/>} label="Epic"/>
            <FormControlLabel control={<Checkbox checked={sci} color="success" onChange={(e)=>setSci(e.target.checked)}/>} label="Sci-Fi"/>
            
          </FormGroup>
          <FormGroup sx={{display:"grid",gridTemplateColumns:"1fr 2fr"}}>
          <div><Button variant="contained" color="secondary" onClick={handleForm} sx={{marginRight:"6px"}}>Submit</Button></div>
          <div><Link to="/login" ><Button variant="outlined" color="secondary"  sx={{marginLeft:"6px"}}>SignIn</Button></Link></div>
          </FormGroup>
          </div>
      </form>
    </Box>
  );
};
export default Register;

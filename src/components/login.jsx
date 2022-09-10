import { Button, TextField,  Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const field = {};

const Login = ({ setAuth }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormData = async (e) => {
    e.preventDefault();

    try {
      const db = await axios("http://localhost:4000/users");
      
      const user = db.data.find(
        (user) => user.password === password && user.username === username

      )
      console.log(user);
      if (user) {
        setAuth(true);
        navigate("/home");
      } else {
        setAuth(false);
        navigate("/");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Box sx={{height:"70vh", background: "url(https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdmllcyUyMHBvc3RlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)",}}>
      <Box>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            minWidth: "400px",
            color: "green",
          }}
        >
          <TextField
            label="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            color="primary"
          />
          <TextField
            label="Password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            sx={field}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "20%", margin: "4px auto" }}
            onClick={handleFormData}
          >
            login
          </Button>
        </form>
      </Box>
    </Box>
  );
};
export default Login;

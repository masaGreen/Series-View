import { Paper, Typography } from "@mui/material"

const Footer = ()=>{
    return(
        
        <Paper component = "div" elevation={0} sx={{
            height:"3em",
            marginTop:"1em",
            background:"#1a237e",
            color:"black",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"100%",
            bottom:0,
            left:0
            }}>
            <Typography variant="h6">
               Netflex &copy; 2022
            </Typography>
        </Paper>
        
    )
}
export default Footer
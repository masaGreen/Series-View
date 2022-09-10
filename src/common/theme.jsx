import { createTheme } from "@mui/material/styles";

export const theme = createTheme(
    {
        palette:{
            primary:{main:"#ab003c"},
            secondary:{
                main:"#fff",
                light:"#00a152"
            }
        },
        components:{
            MuiAppBar:{
                styleOverrides:{
                    root:{
                        background:"#1a237e",
                        
                    }
                }
            },

            MuiCard:{
                styleOverrides:{
                    root:{
                        background:"#474f97",
                        color:"#80cbc4"
                    }
                }
            },
            MuiFormControl:{
                styleOverrides:{
                    root:{
                        margin:"10px auto" ,
                        
                    }
                }
            },
            MuiFormLabel:{
                styleOverrides:{
                    root:{
                        
                        color:"white"
                    }
                }
            },
            MuiInputBase:{
                styleOverrides:{
                    
                    root:{
                        
                        color:"white"
                    }
                }
            },
            MuiGrid:{
                styleOverrides:{
                    
                    container:{
                    //    display:"grid",
                    //    gridTemplateColumns:"repeat(4, 1fr)"

                    }
                }
            }

        }
        
        
    }
)
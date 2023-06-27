import React from "react";
import Box from '@mui/material/Box';
import Sidebar from "./global/Sidebar";
import Topbar from "./global/Topbar";
import Registration from "./Registration";
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import PHome from '../Profile/pages/Home';

export default function Membership() {
    return (
     <div>
        <Topbar/>
        <Box height={30} /> 
        <Box sx={{ display: 'flex' }}> 
            <Sidebar/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>  
            <Grid>
                <Grid item xs={12} sm={6} >
                <Box  sx={{flexDirection: 'row-reverse'}} > 
                <Button
                    type="reset"
                    variant="contained"
                    sx={{ mt: 3}}
                    
                    
                >
                Manual Registration
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, ml: 3}}
                    
                >
                Impport Registration
                </Button>
                </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <PHome/>
                {/* <Registration/> */}
                </Grid>
            </Grid>
            
        </Box>
        </Box>  
    </div>   
    
        
    )
}
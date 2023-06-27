import React from "react";
import Box from '@mui/material/Box';
import Sidebar from "./global/Sidebar";
import Topbar from "./global/Topbar";
import Calendar from "./Calendar/calendar";


export default function Events() {
    return (
     <div>
        <Topbar/>
        <Box height={30} /> 
        <Box sx={{ display: 'flex' }}> 
            <Sidebar/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}> 
              
            <Calendar></Calendar>
        </Box>
        </Box>  
    </div>    
    )
}
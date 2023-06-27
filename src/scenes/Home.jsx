import React from "react";
import Sidebar from "./global/Sidebar";
import Topbar from "./global/Topbar";
import Box from '@mui/material/Box';


export default function Home() {
    return (
     <div>
        <Topbar/>
        <Box height={30} /> 
        <Box sx={{ display: 'flex' }}> 
            <Sidebar/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}> 
            <h1>Dashboard</h1>  
        </Box>
        </Box>  
    </div>    
    )
}
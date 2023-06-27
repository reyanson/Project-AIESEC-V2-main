import React from "react";
import Box from '@mui/material/Box';
import Sidebar from "./global/Sidebar";
import Topbar from "./global/Topbar";
import EventTable from "./global/EventTable";
import TransitionsModal from "./components/TransitionsModal";



export default function Tasks() {
   
    return (

     <div>
        <Topbar/>
        <Box height={30} /> 
        <Box sx={{ display: 'flex' }}> 
            <Sidebar/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}> 
            <Box sx={{pt:4, pb:4}}>
                <TransitionsModal/>
            </Box>
            <EventTable/>  
        </Box>
        </Box>  
    </div>   
    
        
    )
}
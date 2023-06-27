import React from "react";
import Box from '@mui/material/Box';
import Sidebar from "./global/Sidebar";
import Topbar from "./global/Topbar";


export default function Products() {
    return (
     <div>
        <Topbar/>
        <Box height={30} /> 
        <Box sx={{ display: 'flex' }}> 
            <Sidebar/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}> 
            <h1>Products</h1>  
        </Box>
        </Box>  
    </div>   
    
        
    )
}